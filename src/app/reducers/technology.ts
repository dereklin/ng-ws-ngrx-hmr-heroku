import * as technology from '../actions/technology';

export interface State {
  technologies: any[];
}

const initialState: State = {
  technologies: ['Tech1', 'Tech2']
};

export function reducer(state = initialState, action: technology.Actions): State {
  switch (action.type) {
    case technology.ActionTypes.LOAD_TECHNOLOGIES: {
      return {
        technologies: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getTechnologies = (state: State) => state.technologies;
