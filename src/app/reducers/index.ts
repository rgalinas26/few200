import * as fromCounter from './counter.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';


// from counter is an alias for everything that is imported from ./counter.reducer
export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}; // this is a "reducer map".


// Selector functions are below
// 1. create a feature selector. (no feature just yet)

// 2. create a selector for each branch of the state

const selectCounterBranch = (state: AppState) => state.counter;
// 3. (optional) helpers

// 4. for the components

// --we neeed one that returns the current count.


export const selectCurrentCount = createSelector(selectCounterBranch, b => b.count);
// this function takes the current count and returns a boolean depending on the count
// equalling zero
export const selectResetDisabled = createSelector(
  selectCurrentCount, // given the current value o the count on the counter
  c => c === 0); // is it equal to zero? If it is the reset button should be disabled.
