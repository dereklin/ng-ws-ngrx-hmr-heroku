import * as stock from '../actions/stock';
import * as R from 'ramda';

export interface State {
  stockData: any;
}

const initialState: State = {
  stockData: undefined
};

export function reducer(state = initialState, action: stock.Actions): State {
  switch (action.type) {
    case stock.ActionTypes.UPDATE_STOCK_DATA: {
      return R.merge(state, {stockData: action.payload});
    }
    default: {
      return state;
    }
  }
}

export const getStockData = (state: State) => state.stockData;
