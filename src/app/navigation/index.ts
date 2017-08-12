import { MyNgbHighlightComponent } from './my-ngb-highlight.component';
import { FormsModule } from '@angular/forms';
import { BootstrapTabNavComponent } from './bootstrap-tab-nav/bootstrap-tab-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarHandleComponent } from './sidebar-handle/sidebar-handle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    FormsModule],
  declarations: [TopbarComponent, SidebarComponent,
    FooterComponent, BootstrapTabNavComponent,
    SidebarHandleComponent, FooterComponent,
    MyNgbHighlightComponent],
  exports: [TopbarComponent, SidebarComponent,
    FooterComponent, BootstrapTabNavComponent,
    SidebarHandleComponent, FooterComponent,
    MyNgbHighlightComponent]
})
export class NavigationModule { }
