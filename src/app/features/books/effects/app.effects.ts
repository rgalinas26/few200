import { Injectable } from '@angular/core';
import { applicationStarted, applicationFeatureError } from '../../../actions/app.actions';
import { loadBookData, bookAddedFailure } from '../actions/list.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  featureError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookAddedFailure),
      map(f => applicationFeatureError({ feature: 'Books', message: f.message }))
    )
  );

  loadBookData$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationStarted),
        map(() => loadBookData())
      )
  );


  constructor(private actions$: Actions) { }

}
