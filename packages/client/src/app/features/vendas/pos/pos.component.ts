import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';
import { SalesService, CreateSaleDto, SaleItem } from '../../../core/services/sales.service';
import { CustomersService, Customer } from '../../../core/services/customers.service';
import { ProductsService, Product } from '../../../core/services/products.service';
import { AuthService } from '../../auth/auth.service';
import { LayoutService } from '../../../core/services/layout.service';
import { SocketService } from '../../../core/services/socket.service';
import * as QRCode from 'qrcode';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit, OnDestroy {
  @ViewChild('qrcodeCanvas') qrcodeCanvas!: ElementRef<HTMLCanvasElement>;

  scannerActive = false;
  isPairingMode = false;
  pairingSessionId = '';
  isMobileConnected = false;
  qrCodeUrl = '';
  private html5QrCode: Html5Qrcode | null = null;
  private socketSubscriptions: Subscription[] = [];

  searchQuery = '';

  customers: Customer[] = [];
  products: Product[] = [];
  
  saleItems: SaleItem[] = [];
  saleForm = {
    customer_id: '',
    payment_method: '',
    payment_status: 'PENDENTE',
    freight_cost: 0,
    freight_paid_by: 'CLIENTE',
    notes: ''
  };

  paymentMethods = [
    { value: 'money', label: 'Dinheiro' },
    { value: 'credit_card', label: 'Cartão de Crédito' },
    { value: 'debit_card', label: 'Cartão de Débito' },
    { value: 'pix', label: 'PIX' },
    { value: 'bank_transfer', label: 'Transferência Bancária' }
  ];

  constructor(
    private router: Router,
    private salesService: SalesService,
    private customersService: CustomersService,
    private productsService: ProductsService,
    private authService: AuthService,
    private layoutService: LayoutService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.layoutService.setSidebarCollapsed(true);
    this.loadData();
    this.generateSessionId();
    this.setupSocket();
  }

  ngOnDestroy(): void {
    this.stopScanner();
    this.layoutService.setSidebarCollapsed(false);
    this.socketSubscriptions.forEach(sub => sub.unsubscribe());
    this.socketService.disconnect();
  }

  private generateSessionId(): void {
    this.pairingSessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
  }
  
  private setupSocket(): void {
    this.socketService.connect();
    this.socketService.joinSession(this.pairingSessionId);
    
    // Listen for mobile scanner connecting
    this.socketSubscriptions.push(
      this.socketService.onScannerConnected().subscribe(() => {
        this.isMobileConnected = true;
        this.isPairingMode = false;
        this.playBeep();
      })
    );
    
    // Listen for scanned barcodes via websocket
    this.socketSubscriptions.push(
      this.socketService.onBarcodeScanned().subscribe(data => {
        this.addProductByCode(data.code);
      })
    );
  }
  
  togglePairingMode(): void {
    this.isPairingMode = !this.isPairingMode;
    
    if (this.isPairingMode) {
      this.stopScanner();
      
      const currentHost = window.location.origin;
      this.qrCodeUrl = `${currentHost}/app/vendas/scanner?session=${this.pairingSessionId}`;
      
      setTimeout(() => {
        if (this.qrcodeCanvas) {
          QRCode.toCanvas(this.qrcodeCanvas.nativeElement, this.qrCodeUrl, {
            width: 250,
            margin: 2,
            color: { dark: '#0f172a', light: '#f8fafc' }
          }, (error: any) => {
            if (error) console.error(error);
          });
        }
      }, 0);
    } else {
      if (!this.isMobileConnected) {
        this.startScanner();
      }
    }
  }

  loadData() {
    this.customersService.getAll().subscribe({
      next: (res) => this.customers = res,
      error: (err) => console.error('Erro ao carregar clientes', err)
    });
    this.productsService.getAll().subscribe({
      next: (res) => this.products = res,
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }

  goBack() {
    this.router.navigate(['/vendas']);
  }

  async toggleScanner() {
    if (this.scannerActive) {
      await this.stopScanner();
    } else {
      await this.startScanner();
    }
  }

  async startScanner() {
    this.scannerActive = true;
    
    // Pequeno atraso para garantir que o elemento HTML está renderizado (retirado o hidden)
    setTimeout(async () => {
      this.html5QrCode = new Html5Qrcode("reader");
      try {
        await this.html5QrCode.start(
          { facingMode: "environment" }, // back camera
          {
            fps: 10,    // scans per second
            qrbox: { width: 250, height: 250 },  // scan box
            aspectRatio: 1.333334
          },
          (decodedText, decodedResult) => {
            this.onScanSuccess(decodedText);
          },
          (errorMessage) => {
            // ignorar erros de detecção contínuos
          }
        );
      } catch (err) {
        console.error("Erro ao iniciar a câmera do scanner", err);
        alert('Não foi possível iniciar a câmera. Verifique as permissões.');
        this.scannerActive = false;
      }
    }, 100);
  }

  async stopScanner() {
    if (this.html5QrCode && this.html5QrCode.getState() === Html5QrcodeScannerState.SCANNING) {
      try {
        await this.html5QrCode.stop();
        this.html5QrCode.clear();
      } catch (err) {
        console.error("Erro ao parar a câmera", err);
      }
    }
    this.scannerActive = false;
  }

  onScanSuccess(decodedText: string) {
    const sku = decodedText.trim();
    // Para evitar múltiplos scans seguidos do mesmo código, podemos adicionar um debounce aqui (opcional)
    this.addProductByCode(sku);
  }

  searchProduct() {
    if (!this.searchQuery) return;
    const query = this.searchQuery.trim().toLowerCase();
    
    // 1. match exato SKU
    const productBySku = this.products.find(p => p.sku && p.sku.toLowerCase() === query);
    if (productBySku) {
       this.addProduct(productBySku);
       this.searchQuery = '';
       return;
    }
    
    // 2. match aproximação no nome
    const productByName = this.products.find(p => p.name.toLowerCase().includes(query));
    if (productByName) {
       this.addProduct(productByName);
       this.searchQuery = '';
    } else {
       alert('Produto não encontrado!');
    }
  }

  addProductByCode(code: string) {
    const product = this.products.find(p => p.sku === code || p.id === code);
    if (product) {
      this.addProduct(product);
    } else {
      console.warn('Produto não encontrado pelo scanner (SKU não bate): ', code);
    }
  }

  addProduct(product: Product) {
    const existingIndex = this.saleItems.findIndex(i => i.product_id === product.id);
    if (existingIndex > -1) {
       this.saleItems[existingIndex].quantity += 1;
    } else {
       this.saleItems.push({
         product_id: product.id,
         quantity: 1,
         price: Number(product.price),
         product: product
       });
    }
    this.playBeep();
  }

  updateQuantity(index: number, change: number) {
    const current = this.saleItems[index].quantity;
    if (current + change <= 0) {
      this.removeItem(index);
    } else {
      this.saleItems[index].quantity += change;
    }
  }

  removeItem(index: number) {
    this.saleItems.splice(index, 1);
  }

  getItemSubtotal(item: SaleItem) {
    return Number(item.price) * item.quantity;
  }

  get totalSale() {
    return this.saleItems.reduce((acc, item) => acc + this.getItemSubtotal(item), 0);
  }

  get totalWithFreight() {
    return this.totalSale + Number(this.saleForm.freight_cost || 0);
  }

  formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  editItemPrice(index: number) {
    const item = this.saleItems[index];
    const newPrice = prompt(`Editar preço de ${item.product?.name}`, item.price.toString());
    if (newPrice && !isNaN(Number(newPrice))) {
      this.saleItems[index].price = Number(newPrice);
    }
  }

  playBeep() {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.value = 880; // Nota musical parecida com bip de caixa
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.1);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio Context falhou ao tocar Bip", e);
    }
  }

  finalizeSale() {
    if (this.saleItems.length === 0 || !this.saleForm.customer_id || !this.saleForm.payment_method) {
      alert('Preencha cliente e forma de pagamento');
      return;
    }

    const companyId = this.authService.getCompanyId();
    const userId = this.authService.getUserId();

    const saleData: CreateSaleDto = {
      company_id: companyId || '',
      user_id: userId || '',
      customer_id: this.saleForm.customer_id,
      payment_method: this.saleForm.payment_method,
      payment_status: this.saleForm.payment_status as any,
      freight_cost: Number(this.saleForm.freight_cost) || 0,
      freight_paid_by: this.saleForm.freight_paid_by as any,
      notes: this.saleForm.notes,
      items: this.saleItems.map(i => ({
         product_id: i.product_id,
         quantity: i.quantity,
         price: i.price
      }))
    };

    this.salesService.create(saleData).subscribe({
      next: () => {
        alert('Venda finalizada com sucesso!');
        this.html5QrCode?.stop().catch(() => {});
        this.router.navigate(['/app/vendas']);
      },
      error: err => {
        alert('Erro ao finalizar venda');
        console.error(err);
      }
    });
  }
}
