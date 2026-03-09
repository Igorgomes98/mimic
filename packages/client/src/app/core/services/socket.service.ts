import { Injectable, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnDestroy {
  private socket: Socket;
  private readonly socketUrl = environment.apiUrl.replace('/api', ''); // Adjust assuming API is like http://localhost:3000/api

  constructor() {
    this.socket = io(`${this.socketUrl}/pos`, {
      autoConnect: false,
    });
    
    this.socket.on('connect', () => {
      console.log('Connected to POS Gateway');
    });
    
    this.socket.on('disconnect', () => {
      console.log('Disconnected from POS Gateway');
    });
  }

  connect() {
    if (!this.socket.connected) {
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  }

  joinSession(sessionId: string): void {
    this.socket.emit('join_session', sessionId);
  }

  emitScan(sessionId: string, code: string, type: string = 'barcode'): void {
    this.socket.emit('scan_barcode', { sessionId, code, type });
  }

  onBarcodeScanned(): Observable<{code: string, type: string}> {
    return new Observable(observer => {
      this.socket.on('barcode_scanned', (data) => {
        observer.next(data);
      });
      
      return () => {
        this.socket.off('barcode_scanned');
      };
    });
  }

  onScannerConnected(): Observable<{clientId: string}> {
    return new Observable(observer => {
      this.socket.on('scanner_connected', (data) => {
        observer.next(data);
      });
      
      return () => {
        this.socket.off('scanner_connected');
      };
    });
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
