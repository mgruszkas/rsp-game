import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HandComponent } from './game/hand/hand.component';
import { ShapeComponent } from './game/shape/shape.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HandComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
