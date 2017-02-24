import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../reducers';
import * as technology from '../actions/technology';

@Component({
  selector: 'core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit {
  public technologies$: Observable<any[]> = this.store.select(fromRoot.getTechnologies);
  public technologies: any[];
  constructor(private store: Store<fromRoot.State>) {
  }
  public ngOnInit() {
    this.technologies = ['Simple', 'Complex'];
    this.technologies$ = this.store.select(fromRoot.getTechnologies);
  }
}
