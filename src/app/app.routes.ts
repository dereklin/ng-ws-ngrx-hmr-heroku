import { StockComponent } from './stock/stock.component';
import { DelayService } from './services/delay.service';
import { PDataComponent } from './p-data/p-data.component';
import { HomeComponent } from './home/home.component';
import { AgComponent } from './ag/ag.component';
import { NotFoundPageComponent } from './core/not-found-page';
import { CoreComponent } from './core/core.component';
import { Routes } from '@angular/router';

// import { FindBookPageComponent } from './containers/find-book-page';
// import { ViewBookPageComponent } from './containers/view-book-page';
// import { CollectionPageComponent } from './containers/collection-page';

export const ROUTES: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent, resolve: {
          dummy: DelayService
        }
      },
      {
        path: 'ag', component: AgComponent, resolve: {
          dummy: DelayService
        }
      },
      {
        path: 'pd', component: PDataComponent, resolve: {
          dummy: DelayService
        }
      },
      {
        path: 'stock', component: StockComponent, resolve: {
          dummy: DelayService
        }
      },
      { path: '**', component: NotFoundPageComponent }
    ]
  }
];
