import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItems } from '../../models';


@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  @Input() items: TodoListItems[] = []; // the metadatatag @Input notes that
  // this data should be provided to the child components by the parent component
  @Output() markedComplete = new EventEmitter<TodoListItems>();
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItems) {

    this.markedComplete.emit(item);
  }
}
