import { LinnovateNgChartsModule } from '../linnovate-ng-charts/linnovate-ng-charts.module';
import { CommonModule } from '@angular/common';
import { LinnovateAngularChartsModule } from '../linnovate-angular-charts';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { StockComponent } from './stock.component';

@NgModule({
  imports: [
    CommonModule,
    LinnovateAngularChartsModule
  ],
  declarations: [
    StockComponent,
  ],
  exports: [
    StockComponent,
  ]
})
export class StockModule {

}
