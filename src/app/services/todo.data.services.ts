import { TodoListItems } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

export class TodoDataService {
  private data: TodoListItems[] = [
    { id: 1, description: 'Clean Attic', complete: false },
    { id: 2, description: 'Fix snowblower', complete: false }
  ];
  currentID = 3;

  private subject = new BehaviorSubject<TodoListItems[]>(this.data);

  getData(): Observable<TodoListItems[]> {
    return this.subject.asObservable();
  }

  // this is called by the parent component todo-list with the value it was passed by its child component.
  // (todo-list-entry). This is likely where you would call an API.
  addItem(description: string) {
    const itemToAdd = { id: this.currentID++, description, complete: false };
    this.data = [itemToAdd, ...this.data];
    this.subject.next(this.data);
  }

  markComplete(item: TodoListItems) {
    const stored = this.data.find(d => d.id === item.id);
    stored.complete = true;
    this.subject.next(this.data);
  }
}
