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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoListComponent,
    TodoListEntryComponent,
    TodoListListComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
