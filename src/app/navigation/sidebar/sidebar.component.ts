import { animate, Component, ElementRef, Renderer,
    state, style, transition, trigger, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California',
  'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida',
  'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania',
  'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: '[side-bar]',
  animations: [
    trigger('isVisibleChanged', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public model: any;

  @ViewChild('typeaheadSearchBox') public typeaheadSearchBox: ElementRef;

  constructor(private renderer: Renderer) {}

  public formatter = (result: string) => result;

  public search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map((term) => term === '' ? []
        : states.filter((v) => new RegExp(term, 'gi').test(v)).slice(0, 10))

  public sendInputEvent() {
    const e = document.createEvent('KeyboardEvent');
    // e.initKeyboardEvent('keydown', true, true, null, '', 0, '', false, '');
    e.initKeyboardEvent('input', true, true, null, '', 0, '', false, '');

    // let clickEvent = new MouseEvent('click', {bubbles: true});
    // clickEvent.stopPropagation();
    this.renderer.setElementProperty(this.typeaheadSearchBox.nativeElement, 'value', '');
    setTimeout(() => {
      this.renderer.setElementProperty(this.typeaheadSearchBox.nativeElement, 'value', '');
      this.renderer
        .invokeElementMethod(this.typeaheadSearchBox.nativeElement, 'dispatchEvent', [e]);
        // this.typeaheadSearchBox.nativeElement.dispatchEvent(e);
    }, 0);
  }

  public onClick() {
    console.log('i am clicked');
  }
}
