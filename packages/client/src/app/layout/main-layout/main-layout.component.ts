import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService, User } from '../../features/auth/auth.service';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  currentUser: User | null = null;
  isSidebarCollapsed = false;
  isMobileSidebarOpen = false;
  
  private authService = inject(AuthService);
  private layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    
    this.layoutService.isSidebarCollapsed$.subscribe(collapsed => {
      this.isSidebarCollapsed = collapsed;
    });

    this.layoutService.isMobileSidebarOpen$.subscribe(isOpen => {
      this.isMobileSidebarOpen = isOpen;
    });
  }

  toggleMobileSidebar(): void {
    this.layoutService.toggleMobileSidebar();
  }

  closeMobileSidebar(): void {
    this.layoutService.closeMobileSidebar();
  }

  logout(): void {
    this.authService.logout();
  }
}
