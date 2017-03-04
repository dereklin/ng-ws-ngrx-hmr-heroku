import { BootstrapTabNavComponent } from './bootstrap-tab-nav/bootstrap-tab-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarHandleComponent } from './sidebar-handle/sidebar-handle.component';

@NgModule({
  imports:      [BrowserModule, RouterModule],
  declarations: [TopbarComponent, SidebarComponent,
      FooterComponent, BootstrapTabNavComponent, SidebarHandleComponent],
  exports:    [TopbarComponent, SidebarComponent,
      FooterComponent, BootstrapTabNavComponent, SidebarHandleComponent]
})
export class NavigationModule {}
