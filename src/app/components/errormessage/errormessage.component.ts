import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectHasError, selectErrorMessage } from 'src/app/reducers';
import * as actions from '../../actions/app.actions';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.css']
})
export class ErrormessageComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.hasError$ = this.store.select(selectHasError);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }
  clearError() {
    this.store.dispatch(actions.clearApplicationError());
  }

}
