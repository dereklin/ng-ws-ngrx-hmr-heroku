import { Input } from '@angular/core';
import { MainAndNavComponent } from './components/main-and-nav/main-and-nav.component';
import { Component } from '@angular/core';

@Component({
    selector: 'linnovate-ng-charts',
    templateUrl: 'linnovate-ng-charts.component.html',
    styleUrls: ['linnovate-ng-charts.component.scss']
})
export class LinnovateNgChartsComponent {
  public chart = MainAndNavComponent;
  @Input() public options: any;
  @Input() public data: any[];
}
