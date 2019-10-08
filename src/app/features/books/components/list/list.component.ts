import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookListModel } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // whenever a component is showing a list pass it in through an input.
  // This list is going to be immutable. We can tell angular not to watch
  // the individual properties of this array. (See change detection strat on line 8)
  @Input() model: BookListModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
