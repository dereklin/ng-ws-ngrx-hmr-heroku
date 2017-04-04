import { ChangeDetectorRef } from '@angular/core';
import { Component, ElementRef, HostListener,
  OnChanges, OnInit, SimpleChange } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
    selector: 'main-and-nav',
    template: `<ng-content></ng-content>`,
    styleUrls: ['main-and-nav.component.scss']
})
export class MainAndNavComponent implements OnInit, OnChanges {

  public options: any;

  public _data: any[];

  private width;
  private height;
  private navContainerHeight: number = 50;
  private navHeight: number;
  private navMarginTop: number = 20;
  private navMarginBottom: number = 10;
  private margin;
  private xScale;
  private yScaleLeft;
  private yScaleRight;
  private navYScale;
  private htmlElement: HTMLElement;
  private parentElement: any = {clientWidth: 500, clientHeight: 500};
  private host: any;
  private chart: any;
  private visCont: any;
  private xAxis: any;
  private yAxis1: any;
  private yAxis2: any;
  private priceLine: any;
  private resizeChart: Function;
  private navChart: any;
  private navVisCont: any;
  private navXAxis: any;
  private navYAxis1: any;
  private navPriceLine: any;
  private wholeChartVisibleHeight: number;

  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) {
    this.htmlElement = this.el.nativeElement;
    // this.parentElement = this.htmlElement.parentElement;
    this.host = d3.select(this.htmlElement);
    this.resizeChart = this.makeResizeChart();
  }

  public set data(val: any) {
    this.cdRef.markForCheck();
    this._data = val;
    this.render();
  }

  public get data() {
    return this.data;
  }

  public ngOnInit() {
    this.initChart();
    // this.render();
  }

  public ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this._data) {
      this.render();
    }
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.resizeChart();
  }

  public render() {
    if (this._data) {
      this.setup();
      this.renderMain();
      this.renderNav();
    }
  }

  private initChart() {
    this.initMainChart();
    this.initNavChart();
  }

  private initMainChart() {
    this.chart = this.host.append('svg').attr('class', 'chart main');
    this.visCont = this.chart.append('g').attr('class', 'vis main');
    this.xAxis = this.visCont.append('g').attr('class', 'x axis main');
    this.yAxis1 = this.visCont.append('g').attr('class', 'y axis main');
    this.yAxis1
      .append('text')
      // .attr('transform', 'rotate(0)')
      .attr('y', -15)
      .attr('x', 30)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Volume');
    this.yAxis2 = this.visCont.append('g').attr('class', 'y y2 axis main');
    this.yAxis2
      .append('text')
      // .attr('transform', 'rotate(-90)')
      .attr('y', -15)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
    this.priceLine = this.visCont.append('path').attr('class', 'price line main');
  }

  private initNavChart() {
    this.navChart = this.host.append('svg').attr('class', 'chart nav');
    this.navVisCont = this.navChart.append('g').attr('class', 'vis nav');
    this.navXAxis = this.navVisCont.append('g').attr('class', 'x axis nav');
    this.navYAxis1 = this.navVisCont.append('g').attr('class', 'y axis nav');
    this.navYAxis1
      .append('text')
      // .attr('transform', 'rotate(0)')
      .attr('y', -15)
      .attr('x', 30)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Volume');
    this.navPriceLine = this.navVisCont.append('path').attr('class', 'price line nav');
  }

  private renderMain() {
    this.chart
      .attr('width', this.width + this.options.margin.left + this.options.margin.right)
      .attr('height',
          this.height + this.options.margin.top + this.options.mainChart.margin.bottom);
      // .attr('height',
      //     this.height + this.config.margin.top);
    this.visCont
      .attr('transform', 'translate(' +
        this.options.margin.left + ',' + this.options.margin.top + ')');
    this.yAxis2
      .attr('transform', 'translate(' + this.width + ' ,0)');
    let xAxis = d3.axisBottom(this.xScale);
    let yAxisLeft = d3.axisLeft(this.yScaleLeft);
    let yAxisRight = d3.axisRight(this.yScaleRight);
    let line = d3.line<{asOf: any, px: any}>()
      .x((d) => { return this.xScale(d.asOf); })
      .y((d) => { return this.yScaleRight(d.px); });
    this.xScale.domain([this._data[0].asOf, _.last(this._data).asOf]);
    this.yScaleLeft.domain(d3.extent(this._data, (d) => { return d.deltaVol; }));
    this.yScaleRight.domain(d3.extent(this._data, (d) => { return d.px; }));
    this.xAxis.attr('transform', 'translate(0,' + this.height + ')')
      .call(xAxis);

    this.yAxis1
      .call(yAxisLeft);
    this.yAxis2
      .call(yAxisRight);

    this.priceLine.attr('d', line(this._data));
  }

  private renderNav() {
    this.navChart
      .attr('width', this.width + this.options.margin.left + this.options.margin.right)
      // .attr('height', this.navHeight + this.navMarginTop + this.navMarginBottom);
      .attr('height', this.navHeight + this.options.margin.bottom);
    this.navVisCont
      .attr('transform', 'translate(' +
        this.options.margin.left + ',' + 0 + ')');
    this.navYAxis1
      .attr('transform', 'translate(' + this.width + ' ,0)');
    let xAxis = d3.axisBottom(this.xScale);
    let yAxisLeft = d3.axisLeft(this.navYScale);
    let line = d3.line<{asOf: any, deltaVol: any}>()
      .x((d) => { return this.xScale(d.asOf); })
      .y((d) => { return this.navYScale(d.deltaVol); });
    this.xScale.domain([this._data[0].asOf, _.last(this._data).asOf]);
    this.navYScale.domain(d3.extent(this._data, (d) => { return d.deltaVol; }));
    this.navXAxis.attr('transform', 'translate(0,' + this.navHeight + ')')
      .call(xAxis);

    this.navYAxis1
      .call(yAxisLeft);

    this.navPriceLine.attr('d', line(this._data));
  }

  private setup(): void {
    this.parentElement = this.el.nativeElement.parentElement || this.parentElement;
    this.width = this.parentElement.clientWidth -
      this.options.margin.left - this.options.margin.right - 15;
    this.wholeChartVisibleHeight =
      this.parentElement.clientHeight -
      this.options.margin.top -
      this.options.mainChart.margin.bottom;
    // this.height = Math.floor(this.wholeChartVisibleHeight *
    //   (this.config.mainChart.heightPct / 100));
    this.height = Math.floor(this.parentElement.clientHeight *
       (this.options.mainChart.heightPct / 100)) -
      this.options.margin.top -
      this.options.mainChart.margin.bottom;
    // this.height = this.parentElement.clientHeight -
    //   this.config.margin.top - this.navContainerHeight;
    // this.navHeight = this.navContainerHeight - this.navMarginBottom - this.navMarginTop;
    this.navHeight = Math.floor(this.parentElement.clientHeight *
       (this.options.navChart.heightPct / 100)) -
      this.options.margin.bottom;
    // this.navHeight = this.navContainerHeight - this.navMarginBottom;
    this.xScale = d3.scaleTime().range([0, this.width]);
    this.yScaleLeft = d3.scaleLinear().range([this.height, 0]);
    this.yScaleRight = d3.scaleLinear().range([this.height, 0]);
    this.navYScale = d3.scaleLinear().range([this.navHeight, 0]);
  }

  private makeResizeChart = () => {
    return _.debounce(() => {
      this.render();
    }, 200);
  }

}
