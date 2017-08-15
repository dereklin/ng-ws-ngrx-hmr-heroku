import { type } from '../../util';
import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */

export class ActionTypes {
  public static readonly UPDATE_STOCK_DATA =       type('[Stock] Update Stock Data');
}

export class UpdateStockDataAction implements Action {
  public readonly type = ActionTypes.UPDATE_STOCK_DATA;
  constructor(public payload: any) { }
}

export type Actions
  = UpdateStockDataAction;
