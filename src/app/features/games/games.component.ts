import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesListModel } from './models';
import { GamesFeatureState, selectGameListItemModel } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games$: Observable<GamesListModel[]>;
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
    this.games$ = this.store.select(selectGameListItemModel);
  }

}
