import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { OnInit, Component } from '@angular/core';
import * as fromRoot from '../reducers';
import { StockService } from '../services/stock.service';
import * as stock from './actions/stock';

@Component({
  selector: 'stock',
  templateUrl: 'stock.component.html',
  styleUrls: ['stock.component.scss']
})
export class StockComponent implements OnInit {

  public stockData$: Observable<any>;
  public stockChartOptions: any;

  constructor(private store: Store<fromRoot.State>,
              private stockService: StockService) {
    this.stockChartOptions = {
      type: 'mainAndNav',
      margin: { top: 20, right: 50, bottom: 30, left: 100 },
      mainChart: {heightPct: 80, margin: {bottom: 20}},
      navChart: {heightPct: 20}
    };
    this.stockData$ = this.store.select(fromRoot.getStockData);
  }

  public ngOnInit() {
    this.stockService.getStockData().subscribe((d) => {
      this.store.dispatch( new stock.UpdateStockDataAction(d) );
    });
  }

  public refresh() {
    this.stockService.getStockData().subscribe((d) => {
      this.store.dispatch( new stock.UpdateStockDataAction(d) );
    });
  }
}
