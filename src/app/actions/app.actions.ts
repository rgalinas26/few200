import { createAction } from '@ngrx/store';

// an action that will interact with any event that needs to do something on app start.
// In app.component.ts there is a constructor that interacts

export const applicationStarted = createAction(
  '[app] app_start'
);
