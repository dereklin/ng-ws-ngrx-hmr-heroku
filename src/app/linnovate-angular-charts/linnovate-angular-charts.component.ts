import { OnChanges, OnInit, SimpleChange } from '@angular/core/core';
import {
  Component, Input, ViewChild,
  ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import { ChartDirective } from './chart.directive';
import { MainAndNavComponent } from './components/main-and-nav/main-and-nav.component';
import { ChartComponent } from './chart.component';

@Component({
  selector: 'linnovate-angular-charts',
  templateUrl: 'linnovate-angular-charts.component.html',
  styleUrls: ['linnovate-angular-charts.component.scss']
})
export class LinnovateAngularChartsComponent implements AfterViewInit, OnChanges {
  @Input() public options: any;
  @Input() public data: any[];
  @ViewChild(ChartDirective) public chartHost: ChartDirective;

  private componentInstance: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  public ngAfterViewInit() {
    this.loadComponent();
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.updateChart();
  }

  public loadComponent() {
    const componentFactory =
      this._componentFactoryResolver.resolveComponentFactory(MainAndNavComponent);
    const viewContainerRef = this.chartHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentInstance = (componentRef.instance as ChartComponent);
    this.componentInstance.data = this.data;
    this.componentInstance.options = this.options;
    // if (this.data) {
    //   (<ChartComponent> componentRef.instance).render();
    // }
  }

  public updateChart() {
    if (this.componentInstance) {
      this.componentInstance.data = this.data;
    }
  }
}
