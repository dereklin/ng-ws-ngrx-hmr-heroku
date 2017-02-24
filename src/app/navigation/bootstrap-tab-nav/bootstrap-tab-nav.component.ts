import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as tech from '../../actions/technology';
import * as student from '../../actions/student';

@Component({
    selector: 'bootstrap-tab-nav',
    templateUrl: 'bootstrap-tab-nav.component.html',
    styleUrls: ['bootstrap-tab-nav.component.scss']
})
export class BootstrapTabNavComponent {
  private technologies: any = {};
  constructor(private store: Store<fromRoot.State>) {
    this.technologies['ag-grid'] = ['Simple', 'Large'];
  }
  public onClick(technology) {
    this.store.dispatch(new tech.LoadTechnologiesAction(this.technologies[technology]));
  }
}
