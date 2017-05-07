import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GameComponent } from './game.component';
import { ShapeComponent, HandComponent } from './../index';
import { AIPlayerService } from './../services/aiplayer.service';

@NgModule({
  declarations: [HandComponent],
  entryComponents: [
    HandComponent
  ]
})
class TestModule {}

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameComponent,
        ShapeComponent,
      ],
      imports: [TestModule],
      providers: [ AIPlayerService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  let startGame = () => {
    let btn = fixture.debugElement.query(By.css('.rsp-game-controls button.control-button'));
    btn.triggerEventHandler('click', null);
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Start button', async (() => {
    expect(compiled.querySelector('.rsp-game-controls button.control-button')).toBeTruthy();
  }));

  it('should have three shapes to choose from', async (() => {
    expect(compiled.querySelectorAll('rsp-shape').length).toEqual(3);
  }));

  it('should start the game after clicking Start button', async(() => {
    startGame();
    expect(compiled.classList.contains('counter')).toBeTruthy();
  }));

});
