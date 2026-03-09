import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _isSidebarCollapsed = new BehaviorSubject<boolean>(false);
  private _isMobileSidebarOpen = new BehaviorSubject<boolean>(false);

  public readonly isSidebarCollapsed$: Observable<boolean> = this._isSidebarCollapsed.asObservable();
  public readonly isMobileSidebarOpen$: Observable<boolean> = this._isMobileSidebarOpen.asObservable();

  get isSidebarCollapsed(): boolean {
    return this._isSidebarCollapsed.getValue();
  }

  get isMobileSidebarOpen(): boolean {
    return this._isMobileSidebarOpen.getValue();
  }

  toggleSidebar(): void {
    this._isSidebarCollapsed.next(!this.isSidebarCollapsed);
  }

  setSidebarCollapsed(collapsed: boolean): void {
    if (this.isSidebarCollapsed !== collapsed) {
      this._isSidebarCollapsed.next(collapsed);
    }
  }

  toggleMobileSidebar(): void {
    this._isMobileSidebarOpen.next(!this.isMobileSidebarOpen);
  }

  closeMobileSidebar(): void {
    this._isMobileSidebarOpen.next(false);
  }
}
