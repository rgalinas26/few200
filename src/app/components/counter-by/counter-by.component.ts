import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCountingBy } from '../../reducers';
import { countBySet } from '../../actions/counter.actions';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-counter-by',
  templateUrl: './counter-by.component.html',
  styleUrls: ['./counter-by.component.css']
})
export class CounterByComponent implements OnInit, OnDestroy {

  // Below is an example of manually subscribing. You must use onDestroy here yourself
  // or you will have a memory leak. Async naturally destroys the subscription, so the
  // common way we have been doing this is fine too.

  by$: Observable<number>;
  subscription: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this a subscription and it gets the state right away. ngOnInit
    // resolves right before the component is added to the DOM.
    this.by$ = this.store.select(selectCountingBy);
    this.subscription = this.store.select(selectCountingBy)
      .subscribe((by) => {
        console.log('Just got a new by: ', by);
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setCountBy(by: number) {
    // dispatch an action
    this.store.dispatch(countBySet({ by }));
  }

}
