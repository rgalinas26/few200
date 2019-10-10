import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GameentryComponent } from './gameentry/gameentry.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [GamesComponent, GameentryComponent, GamelistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [GamelistComponent]
})
export class GamesModule { }
