import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GameentryComponent } from './gameentry/gameentry.component';



@NgModule({
  declarations: [GamesComponent, GameentryComponent],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
