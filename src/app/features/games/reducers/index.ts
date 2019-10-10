import * as fromList from './games.list.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesListModel } from '../models';

export const featureName = 'gamesFeature';

export interface GamesFeatureState {
  list: fromList.GameListState;
}

export const reducers: ActionReducerMap<GamesFeatureState> = {
  list: fromList.reducer
};

const selectGamesFeature = createFeatureSelector<GamesFeatureState>(featureName);

const selectGameListBranch = createSelector(selectGamesFeature, g => g.list);

const { selectAll: selectGameEntityArray } = fromList.adapter.getSelectors(selectGameListBranch);

export const selectGameListItemModel = createSelector(
  selectGameEntityArray,
  games => games.map(game => {
    return {
      ...game,
    } as GamesListModel;
  })
);

// export const selectGameDataLoaded = createSelector(selectGameListBranch, b => b.);
