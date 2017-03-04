import * as layout from '../actions/layout';

export interface State {
  sidebarState: string;
}

const initialState: State = {
  sidebarState: 'closed'
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.OPEN_SIDEBAR: {
      return {
        sidebarState: 'open'
      };
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
