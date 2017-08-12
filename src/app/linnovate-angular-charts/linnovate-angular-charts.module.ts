import { ChainTransitionComponent } from './components/chain-transition/chain-transition.component';
import { ChartDirective } from './chart.directive';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LinnovateAngularChartsComponent } from './linnovate-angular-charts.component';
import { MainAndNavComponent } from './components/main-and-nav/main-and-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LinnovateAngularChartsComponent,
    MainAndNavComponent,
    ChartDirective,
    ChainTransitionComponent
  ],
  exports: [
    LinnovateAngularChartsComponent,
  ],
  entryComponents: [MainAndNavComponent]
})
export class LinnovateAngularChartsModule {

}
