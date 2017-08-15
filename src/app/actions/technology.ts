import { type } from '../util';
import { Action } from '@ngrx/store';

export class ActionTypes {
  public static readonly LOAD_TECHNOLOGIES =       type('[Technology] Load');
}

export class LoadTechnologiesAction implements Action {
  public readonly type = ActionTypes.LOAD_TECHNOLOGIES;
  constructor(public payload: any[]) { }
}

export type Actions
  = LoadTechnologiesAction;
