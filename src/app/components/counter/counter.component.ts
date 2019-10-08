import { Component, OnInit } from '@angular/core';
import { AppState, selectCurrentCount, selectResetDisabled } from '../../reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  // getting ahold of the store with a constructor so that we can access the values there.
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this a subscription and it gets the state right away. ngOnInit
    // resolves right before the component is added to the DOM.
    // sets the observable count to the value in the store using a selector function
    this.count$ = this.store.select(selectCurrentCount);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }

  // an action is just an object, so here we have added some objects to a different file and imported them to get strong typed objects.
  // You could write this {type: 'actionName'} and it would do the same thing.
  increment() {
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    this.store.dispatch(actions.countDecremented());
  }
  reset() {
    this.store.dispatch(actions.countReset());

  }

}
