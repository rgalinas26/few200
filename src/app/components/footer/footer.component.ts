import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterModel } from 'src/app/models';
import { TodoDataService } from 'src/app/services/todo.data.services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items$: Observable<FooterModel>;
  constructor(private service: TodoDataService) { }

  ngOnInit() {
    // A pipe says when data is returned push it through this pipe
    this.items$ = this.service.getData().pipe(
      map(data => {
        return {
          totalTodos: data.length,
          completedTodos: data.filter(d => d.complete).length,
          remainingTodos: data.filter(d => !d.complete).length
        } as FooterModel;
      })
    );
  }

}
