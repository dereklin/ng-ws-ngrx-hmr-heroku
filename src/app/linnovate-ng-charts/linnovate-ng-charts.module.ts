import { BrowserModule } from '@angular/platform-browser';
import { MainAndNavComponent } from './components/main-and-nav/main-and-nav.component';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LinnovateNgChartsComponent } from './linnovate-ng-charts.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LinnovateNgChartsComponent,
    MainAndNavComponent
  ],
  exports: [
    LinnovateNgChartsComponent,
  ],
  entryComponents: [MainAndNavComponent]
})
export class LinnovateNgChartsModule {

}
