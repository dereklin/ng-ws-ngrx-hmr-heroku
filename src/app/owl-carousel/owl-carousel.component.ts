import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'owl-carousel',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwlCarouselComponent implements OnChanges, AfterViewInit, OnDestroy {
  @HostBinding('class') public defaultClass = 'owl-carousel';
  @Input() public options: object = {};

  public $owlElement: any;

  constructor(private el: ElementRef) {}

  public ngOnChanges(unused: any) {
    if (this.$owlElement) {
      setTimeout(() => {
        this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
      }, 0);
    }
  }

  public ngAfterViewInit() {
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
  }

  public ngOnDestroy() {
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }
}
