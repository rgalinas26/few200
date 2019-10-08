import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: BookState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'War of the Worlds', author: 'Wells' },
    2: { id: '2', title: 'Call of the Cthulhu', author: 'Lovecraft' }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: BookState = initialState, action: Action) {
  return reducerFunction(state, action);
}



