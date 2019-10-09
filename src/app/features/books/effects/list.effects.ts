import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadBookData, bookDataLoadedSuccessfully, bookAdded, bookAddedSuccessfully, bookAddedFailure } from '../actions/list.actions';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { BookEntity } from '../reducers/list.reducer';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {

  readonly url = 'http://localhost:3000/books';

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookAdded),
      map(a => a.entity),
      switchMap((originalBook) => this.client.post<BookEntity>(this.url, { title: originalBook.title, author: originalBook.author })
        .pipe(
          map(result => bookAddedSuccessfully({ oldId: originalBook.id, book: result })),
          catchError(err => {
            return of(bookAddedFailure({ book: originalBook, message: err.error.message }));
          })
        )
      )
    ), { dispatch: true });


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
