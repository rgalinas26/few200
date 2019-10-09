import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadBookData, bookDataLoadedSuccessfully } from '../actions/list.actions';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { BookEntity } from '../reducers/list.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class ListEffects {

  readonly url = 'http://localhost:3000/books';

  loadBookData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookData),
      switchMap(() => this.client.get<{ books: BookEntity[] }>(this.url)
        .pipe(
          map(response => response.books),
          map(books => bookDataLoadedSuccessfully({ books }))
        )
      )
    ), { dispatch: true }

  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
