import { Component, OnInit, Input } from '@angular/core';
import { TodoListItems } from '../../models';
import { TodoDataService } from 'src/app/services/todo.data.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entryTitle = 'Add your stuff';
  stuff$: Observable<TodoListItems[]>; // the $ is a naming convention to indicate
  // an observable. If you see a $ on a property you have to use | async
  // syntax to invoke it
  nextId = 3;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.stuff$ = this.service.getData();
  }

  // Here, after the child component has emitted an event with data, the parent component's function
  // executes to call the service where the item is added to the array of todolist items.
  addThingToList(description: string) {
    this.service.addItem(description);
  }
  markComplete(item: TodoListItems) {
    this.service.markComplete(item);
  }
}
