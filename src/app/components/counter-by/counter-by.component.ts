import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { countBySet } from '../../actions/counter.actions';


@Component({
  selector: 'app-counter-by',
  templateUrl: './counter-by.component.html',
  styleUrls: ['./counter-by.component.css']
})
export class CounterByComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  setCountBy(by: number) {
    // dispatch an action
    this.store.dispatch(countBySet({ by }));
  }

}
