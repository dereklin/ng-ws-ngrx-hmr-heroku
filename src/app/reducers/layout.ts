import * as layout from '../actions/layout';
import * as R from 'ramda';

export interface State {
  sidebarState: string;
}

const initialState: State = {
  sidebarState: 'closed'
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.OPEN_SIDEBAR: {
      const sidebarLens = R.lensProp('sidebarState');
      return R.set(sidebarLens, 'open', state);
    }
    case layout.ActionTypes.CLOSE_SIDEBAR: {
      return {
        sidebarState: 'closed'
      };
    }
    default: {
      return state;
    }
  }
}

export const getSidebarState = (state: State) => state.sidebarState;
