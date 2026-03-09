import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../features/auth/auth.service';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isMobileOpen = false;
  private router = inject(Router);
  private authService = inject(AuthService);
  private layoutService = inject(LayoutService);
  
  ngOnInit() {
    this.layoutService.isSidebarCollapsed$.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });

    this.layoutService.isMobileSidebarOpen$.subscribe((isOpen: boolean) => {
      this.isMobileOpen = isOpen;
    });
  }

  toggleCollapse(): void {
    this.layoutService.toggleSidebar();
  }

  closeMobileSidebar(): void {
    this.layoutService.closeMobileSidebar();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
