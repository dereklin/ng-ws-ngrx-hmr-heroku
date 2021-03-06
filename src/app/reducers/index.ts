import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromStudent from './student';
import * as fromTechnology from './technology';
import * as fromLayout from './layout';
import * as fromStock from '../stock/reducers/stock';
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  student: fromStudent.State;
  technology: fromTechnology.State;
  layout: fromLayout.State;
  stock: fromStock.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  student: fromStudent.reducer,
  technology: fromTechnology.reducer,
  layout: fromLayout.reducer,
  stock: fromStock.reducer
};

// Generate a reducer to set the root state in dev mode for HMR
export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action: any) => {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

export const metaReducers: any = [stateSetter];

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
export const getStudentState = (state: State) => state.student;
export const getTechnologyState = (state: State) => state.technology;
export const getLayoutState = (state: State) => state.layout;
export const getStockState = (state: State) => state.stock;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getStudents = createSelector(getStudentState, fromStudent.getStudents);

export const getSelectedStudent = createSelector(getStudentState, fromStudent.getSelectedStudent);

export const getTechnologies = createSelector(getTechnologyState, fromTechnology.getTechnologies);

export const getSidebarState = createSelector(getLayoutState, fromLayout.getSidebarState);

export const getStockData = createSelector(getStockState, fromStock.getStockData);
