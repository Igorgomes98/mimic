import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import { SocketService } from '../../../core/services/socket.service';

@Component({
  selector: 'app-mobile-scanner',
  imports: [CommonModule],
  templateUrl: './mobile-scanner.component.html',
  styleUrl: './mobile-scanner.component.scss'
})
export class MobileScannerComponent implements OnInit, OnDestroy {
  @ViewChild('beepSound') beepSound!: ElementRef<HTMLAudioElement>;
  
  sessionId: string = '';
  isConnected: boolean = false;
  isCameraActive: boolean = false;
  lastScannedCode: string = '';
  
  private scanner: Html5QrcodeScanner | null = null;
  private lastScanTime: number = 0;
  private scanDelay: number = 1500; // 1.5 seconds cooldown between scans

  constructor(
    private route: ActivatedRoute,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    // 1. Get session ID from URL
    this.route.queryParams.subscribe(params => {
      this.sessionId = params['session'];
      if (this.sessionId) {
        this.setupSocket();
        this.startScanner();
      } else {
        alert('Sessão inválida. Escaneie o QR Code gerado na tela do Caixa.');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scanner) {
      try {
        this.scanner.clear();
      } catch (e) {
        console.error('Error stopping scanner:', e);
      }
    }
    this.socketService.disconnect();
  }

  private setupSocket(): void {
    this.socketService.connect();
    
    // We join the session
    this.socketService.joinSession(this.sessionId);
    
    // Once joined, consider it connected (Socket.io auto-connects under the hood)
    this.isConnected = true;
  }

  private startScanner(): void {
    this.isCameraActive = true;
    
    // Add small delay to let UI render the #mobile-reader div
    setTimeout(() => {
      this.scanner = new Html5QrcodeScanner(
        "mobile-reader",
        { 
          fps: 10, 
          qrbox: { width: 250, height: 150 },
          aspectRatio: 1.0,
          formatsToSupport: [
            0, // QR_CODE
            1, // AZTEC
            2, // DATA_MATRIX
            3, // MAXICODE
            4, // PDF_417
            5, // RSS_14
            6, // RSS_EXPANDED
            7, // UPC_A
            8, // UPC_E
            9, // EAN_8
            10, // EAN_13
            11, // CODE_39
            12, // CODE_93
            13, // CODE_128
            14  // ITF
          ]
        },
        /* verbose= */ false
      );

      this.scanner.render(
        (decodedText: string) => this.onScanSuccess(decodedText),
        (error: any) => this.onScanFailure(error)
      );
    }, 100);
  }

  private onScanSuccess(decodedText: string): void {
    const now = Date.now();
    if (now - this.lastScanTime < this.scanDelay) {
      // Ignore duplicate rapid scans
      return;
    }

    this.lastScanTime = now;
    this.lastScannedCode = decodedText;
    
    // Emit via WebSocket
    if (this.isConnected && this.sessionId) {
      this.socketService.emitScan(this.sessionId, decodedText);
    }
    
    this.playBeep();
    
    // Clean up UI
    setTimeout(() => {
      this.lastScannedCode = '';
    }, 2000);
  }

  private onScanFailure(error: any): void {
    // Ignored, happens every frame there isn't a barcode
  }

  private playBeep(): void {
    try {
      if (this.beepSound && this.beepSound.nativeElement) {
        this.beepSound.nativeElement.currentTime = 0;
        this.beepSound.nativeElement.play().catch(e => console.error('Audio play prevented', e));
      }
    } catch (e) {
      console.error('Error playing beep', e);
    }
  }
}
