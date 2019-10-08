import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListEntryComponent } from './components/todo-list-entry/todo-list-entry.component';
import { TodoListListComponent } from './components/todo-list-list/todo-list-list.component';
import { TodoDataService } from './services/todo.data.services';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterByComponent } from './components/counter-by/counter-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoListComponent,
    TodoListEntryComponent,
    TodoListListComponent,
    FooterComponent,
    DashboardComponent,
    CounterComponent,
    CounterByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument() // if something ends in module
    // you should put it in your import statment.
  ],
  providers: [
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
