import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameListState } from '../reducers/games.list.reducer';

@Component({
  selector: 'app-gameentry',
  templateUrl: './gameentry.component.html',
  styleUrls: ['./gameentry.component.css']
})
export class GameentryComponent implements OnInit {

  constructor(private store: Store<GameListState>) { }

  ngOnInit() {
  }

}
