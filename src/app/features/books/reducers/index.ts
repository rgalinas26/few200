import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromModels from '../models';

export const featureName = 'booksFeature';

export interface BooksFeatureState {
  list: fromList.BookState;
}

export const reducers: ActionReducerMap<BooksFeatureState> = {
  list: fromList.reducer
};

// 1. Feature Selector
const selectBooksFeature = createFeatureSelector<BooksFeatureState>(featureName);

// 2. Selector per branch
const selectListBranch = createSelector(selectBooksFeature, b => b.list);

// 3. Helpers'

// this is object destructuring to get ahold the method that returns an array of book obj
const { selectAll: selectBookEntityArray } = fromList.adapter.getSelectors(selectListBranch);

// 4. For our components

//  -- Need an BookListItemModel[] for the list.

export const selectBookListItemModel = createSelector(
  selectBookEntityArray,
  books => (books as fromModels.BookListModel[]));

