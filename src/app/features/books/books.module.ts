import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { SorterComponent } from './components/sorter/sorter.component';



@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent, SorterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [BooksComponent] // this line says that BooksComponent should be avaliable to the rest of the application
})
export class BooksModule { }