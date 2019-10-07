import { Component, OnInit, Input } from '@angular/core';
import { TodoListItems } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entryTitle = 'Add your stuff';
  stuff: TodoListItems[] = [
    { id: 1, description: 'Get bread', complete: true },
    { id: 2, description: 'Get more bread', complete: false }
  ];
  nextId = 3;

  constructor() { }

  ngOnInit() {
  }

  addThingToList(description: string) {

    this.stuff = [{ id: this.nextId++, description, complete: false }, ...this.stuff];
  }

}
