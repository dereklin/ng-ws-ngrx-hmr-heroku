import { AfterViewInit, Component, ElementRef,
    HostBinding, Input, OnChanges, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
    selector: 'technology-carousel',
    templateUrl: 'technology-carousel.component.html',
    styleUrls: ['technology-carousel.component.scss']
})
export class TechnologyCarouselComponent implements OnChanges, AfterViewInit, OnDestroy {
  @HostBinding('class') public defaultClass = 'owl-carousel';
  public selectedCarouselTicker: string = '';
  @Input() public options: object = {};
  @Input() public technologies: string[];

  public $owlElement: any;

  constructor(private el: ElementRef) { }

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
