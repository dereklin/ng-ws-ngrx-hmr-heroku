import { Component, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

export function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function toString(value: any): string {
  return (value !== undefined && value !== null) ? `${value}` : '';
}

@Component({
  selector: 'my-ngb-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
      `<span *ngIf="isOdd" >{{part}}</span>` +
      `<ng-template [ngIf]="!isOdd">` +
      `<span class="{{highlightClass}}">{{part}}</span></ng-template>` +
      `</ng-template>`,
      // template needs to be formatted in a certain way so we don't add empty text nodes
  styles: [`
    .ngb-highlight {
      font-weight: bold;
    }
  `]
})
export class MyNgbHighlightComponent implements OnChanges {
  public parts: string[];

  @Input() public highlightClass = 'ngb-highlight';
  @Input() public result: string;
  @Input() public term: string;

  public ngOnChanges(changes: SimpleChanges) {
    const resultStr = toString(this.result);
    const resultLC = resultStr.toLowerCase();
    const termLC = toString(this.term).toLowerCase();
    let currentIdx = 0;

    if (termLC.length > 0) {
      this.parts = resultLC.split(new RegExp(`(${regExpEscape(termLC)})`)).map((part) => {
        const originalPart = resultStr.substr(currentIdx, part.length);
        currentIdx += part.length;
        return originalPart;
      });
    } else {
      this.parts = [resultStr];
    }
  }
}
