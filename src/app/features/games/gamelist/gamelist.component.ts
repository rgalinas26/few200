import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookListModel } from '../../books/models';
import { GamesListModel } from '../models';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamelistComponent implements OnInit {

  constructor() { }

  @Input() model: GamesListModel[] = [];
  ngOnInit() {
  }

}
