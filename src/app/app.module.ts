import { StockModule } from './stock/stock.module';
import { WindowRef } from './services/window-ref';
import { WindowService } from './services/window.service';
import { EvenBetterLoggerService } from './services/even-better-logger.service';
import { LoggerService } from './services/logger.service';
import { DelayService } from './services/delay.service';
import { NavigationModule } from './navigation';
import { FlexLayoutModule } from '@angular/flex-layout';
import '../styles/headings.css';
import '../styles/styles.scss';
import 'rxjs/add/operator/take';
import { AgModule } from './ag/ag.module';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { ROUTES } from './app.routes';
import { CoreModule } from './core';
import { StudentEffects } from './effects/student';
import { ENV_PROVIDERS } from './environment';
import { HomeModule } from './home/home.module';
import { NoContentComponent } from './no-content';
import { PDataModule } from './p-data';
import { reducers, State as AppState, metaReducers } from './reducers';
import { StudentService } from './services/student.service';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StockService } from './services/stock.service';

/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component
// import * as root from './actions/root';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

interface StoreType {
  rootState: AppState;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    FlexLayoutModule.forRoot(),
    CoreModule,
    HomeModule,
    AgModule,
    PDataModule,
    NavigationModule,
    StockModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    // StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    StudentService,
    DelayService,
    { provide: LoggerService, useClass: EvenBetterLoggerService },
    { provide: 'windowObject', useValue: window },
    WindowService,
    WindowRef,
    StockService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    private store: Store<AppState>
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.rootState) {
      return;
    }

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this.store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach((prop) => delete store[prop]);
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    this.store.take(1).subscribe((s) => store.rootState = s);
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
