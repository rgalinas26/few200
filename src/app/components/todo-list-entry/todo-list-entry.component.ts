import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css']
})
export class TodoListEntryComponent implements OnInit {

  // this is how the parent component gets data from the child component. Here, addedItem can emit a value
  // and on the parent element template you can listen for the name of the event emitter,
  // call a function and pass in the data as an argument.
  // see line 7 on todo-list.component.html
  @Output() addedItem = new EventEmitter<string>();
  @Input() title = 'Your things to do';
  constructor() { }

  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    console.log(item.value);
    this.addedItem.emit(item.value);
    item.value = ''; // clear it out
    item.focus(); // put the cursor in there waiting for the next thing
  }
}
