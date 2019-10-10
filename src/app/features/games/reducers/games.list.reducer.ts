import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/gamelist.actions';

export interface GameEntity {
  id: string;
  title: string;
  publisher: string;
  platform: string;
}

export interface GameListState extends EntityState<GameEntity> {

}

export const adapter = createEntityAdapter<GameEntity>();

// const initialState = adapter.getInitialState();
const initialState: GameListState = {
  ids: ['1'],
  entities: {
    1: { id: '1', title: 'Dark Souls', publisher: 'From', platform: 'Switch' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.loadGameData, (state) => ({ ...state }))
);

export function reducer(state: GameListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



