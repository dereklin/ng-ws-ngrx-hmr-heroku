import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import * as fromRoot from './reducers';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public sidebarState$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.sidebarState$ = this.store.select(fromRoot.getSidebarState);
  }

}
