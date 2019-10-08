import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';



export interface CounterState {
  count: number;
  by: number;
}

const initialState: CounterState = {
  count: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countDecremented, (state) => ({ count: state.count - state.by, by: state.by })),
  on(actions.countIncremented, (state) => ({ count: state.count + state.by, by: state.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (state, action) => ({ count: state.count, by: action.by }))
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

// reducer function
// (currentState, Action) => newState

// This is the same as above, but less clean.

// the big rule for reducers is you cant modify the State or the Action in the parameters,
// and it must be a pure function i.e. whatever comes out must be derived from the CounterState.
// export function reducer(state: CounterState = initialState, action: Action): CounterState {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         count: state.count + 1
//       };
//     }
//     case 'decrement': {
//       return {
//         count: state.count - 1
//       };
//     }
//     case 'reset': {
//       return {
//         count: state.count = 0
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
