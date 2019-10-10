import { createAction } from '@ngrx/store';
import { GameEntity } from '../reducers/games.list.reducer';



let currentId = 99;

export const loadGameData = createAction(
  '[games] load the game data'
);

export const gameAdded = createAction(
  '[games] game added',
  ({ title, publisher, platform }: { title: string, publisher: string, platform: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      publisher,
      platform
    } as GameEntity
  })
);
