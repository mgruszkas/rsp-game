import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent, GameComponent, HandComponent, ShapeComponent } from './index';

// services
import { AIPlayerService } from './index';

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
  entryComponents: [ShapeComponent],
  providers: [AIPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
