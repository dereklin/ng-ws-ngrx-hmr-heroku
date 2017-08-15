import { type } from '../util';
import { Action } from '@ngrx/store';

export class ActionTypes {
  public static readonly OPEN_SIDEBAR =       type('[Layout] Open Sidebar');
  public static readonly CLOSE_SIDEBAR =       type('[Layout] Close Sidebar');
}

export class OpenSidebarAction implements Action {
  public readonly type = ActionTypes.OPEN_SIDEBAR;
}

export class CloseSidebarAction implements Action {
  public readonly type = ActionTypes.CLOSE_SIDEBAR;
}

export type Actions
  = OpenSidebarAction |
    CloseSidebarAction;
