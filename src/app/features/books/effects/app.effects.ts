import { Injectable } from '@angular/core';
import { applicationStarted } from '../../../actions/app.actions';
import { loadBookData } from '../actions/list.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  loadBookData$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationStarted),
        map(() => loadBookData())
      )
  );


  constructor(private actions$: Actions) { }

}
