import * as fromRoot from '../reducers';
import { Component, OnInit } from '@angular/core';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit {
  public loading: boolean = true;
  public technologies$: Observable<any[]> = this.store.select(fromRoot.getTechnologies);
  public technologies: any[];
  public carouselOptions: any = {};
  constructor(private store: Store<fromRoot.State>, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  public ngOnInit() {
    this.technologies = ['Simple', 'Complex'];
    this.technologies$ = this.store.select(fromRoot.getTechnologies);
  }

  private navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
          this.loading = true;
      }
      if (event instanceof NavigationEnd) {
          this.loading = false;
      }

      if (event instanceof NavigationCancel) {
          this.loading = false;
      }
      if (event instanceof NavigationError) {
          this.loading = false;
      }
  }

}
