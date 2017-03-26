import { WindowService } from '../../services/window.service';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as layout from '../../actions/layout';

@Component({
    selector: 'sidebar-handle',
    templateUrl: 'sidebar-handle.component.html',
    styleUrls: ['sidebar-handle.component.scss']
})
export class SidebarHandleComponent {
  public sidebarState$: Observable<string>;

  constructor(private store: Store<fromRoot.State>,
              private windowService: WindowService) {
    this.sidebarState$ = this.store.select(fromRoot.getSidebarState);
  }

  public closeSidebar() {
    this.store.dispatch(new layout.CloseSidebarAction());
    this.windowService.resize(250);
  }

  public openSidebar() {
    this.store.dispatch(new layout.OpenSidebarAction());
    this.windowService.resize(250);
  }
}
