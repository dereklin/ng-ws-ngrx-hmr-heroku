import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  constructor(private http: Http) { }

  public getStockData() {
    return this.http.request('./assets/mock-data/stock-data.json')
      .map((res: Response) => res.json().data);
  }
}
