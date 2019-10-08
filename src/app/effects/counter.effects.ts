import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable() // This attributed tells angular that when you create one of these you have to inject something in. It will inject actions
// actions are observables. We do effects for anything you can't do in a reducer like call an api, etc. You do it based on actions.
// You watch for an action then do soemthing
export class CounterEffects {

  writeCountByToLs$ = createEffect(() =>
    this.actions$.pipe(
      // if the action is a countBySet action you will take it and write it to local storage.
      ofType(counterActions.countBySet),
      tap((theAction) => localStorage.setItem('by', theAction.by.toString()))
    ), { dispatch: false }

  );

  // ofType applicationStarted? - see if the value for countBy is in local storage.
  // If it is there, turn it into an action that creates a new state.
  // if it is not there, do thing.
  readCountByFromLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), // ("1" | "3" | "5") || null
      filter(val => val !== null), // it stops here, or it passes on the value e.g. 3
      map(val => parseInt(val, 10)), // "3" => 3
      map(by => counterActions.countBySet({ by })) // an action back to the reducer
    )
  );


  constructor(private actions$: Actions) { }
}
