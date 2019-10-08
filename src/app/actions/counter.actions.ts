import { Action, createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  // An action object that says what module we are in [app] and a unique name.
  '[app] count incremented'
);

export const countDecremented = createAction(
  '[app] count decremented'
);

export const countReset = createAction(
  '[app] count reset'
);

export const countBySet = createAction(
  '[app] count by set',
  props<{ by: number }>()
);
