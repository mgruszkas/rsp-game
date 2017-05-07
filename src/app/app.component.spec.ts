import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ShapeComponent, HandComponent } from './index';
import { AIPlayerService } from './services/aiplayer.service';

@NgModule({
  declarations: [HandComponent],
  entryComponents: [
    HandComponent
  ],
  providers: [],
  exports: [HandComponent]
})
class TestModule {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameComponent,
        ShapeComponent
      ],
      providers: [
        AIPlayerService
      ],
      imports: [TestModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render "rsp-game" component', async(() => {
    expect(compiled.querySelector('rsp-game')).toBeTruthy();
  }));

  it('should have Start button', async (() => {
    expect(compiled.querySelector('.rsp-game-controls button.control-button')).toBeTruthy();
  }));

  it('should have three shapes to choose from', async (() => {
    expect(compiled.querySelectorAll('rsp-shape').length).toEqual(3);
  }));
  
});
