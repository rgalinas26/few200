import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameListState } from '../reducers/games.list.reducer';
import { gameAdded } from '../actions/gamelist.actions';

@Component({
  selector: 'app-gameentry',
  templateUrl: './gameentry.component.html',
  styleUrls: ['./gameentry.component.css']
})
export class GameentryComponent implements OnInit {

  constructor(private store: Store<GameListState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, publisherEl: HTMLInputElement, platformEl: HTMLSelectElement) {
    const title = titleEl.value;
    const publisher = publisherEl.value;
    const platform = platformEl.value;
    this.store.dispatch(gameAdded({ title, publisher, platform }));
    titleEl.value = '';
    publisherEl.value = '';
    platformEl.value = 'Platform';
    titleEl.focus();

  }

}
