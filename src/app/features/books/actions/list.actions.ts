import { createAction } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let currentId = 99;

export const bookAdded = createAction(
  '[books] book added',
  ({ title, author }: { title: string, author: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      author
    } as BookEntity
  })
);
