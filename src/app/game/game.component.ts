import { Component, AfterContentInit, ContentChild, Renderer, ElementRef } from '@angular/core';
import { HandComponent, SHAPES } from './../index';
import { AIPlayerService } from './../services/aiplayer.service';

export enum GAME_STATE {
  INIT = 0,
  STARTED = 1,
  WIN  = 2,
  LOOSE = 3,
  DRAW = 4
};

const TIMEOUT = 3000;

@Component({
  selector: 'rsp-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterContentInit {
  get shapes() {
    return SHAPES;
  }
  get buttonAction() {
    return this.state === GAME_STATE.INIT ? 'Start Game' : 'Restart Game';
  }
  public state: GAME_STATE = GAME_STATE.INIT;
  @ContentChild('computerHand') public computerHand: HandComponent;
  @ContentChild('playerHand') public playerHand: HandComponent;
  private userShape: SHAPES | null = null;
  private counterTimeout: any;
  private controlButton: HTMLElement;
  constructor(private aiService: AIPlayerService, private element: ElementRef, private renderer: Renderer) {

  }

  public ngAfterContentInit() {
    this.controlButton = this.element.nativeElement.querySelector('.control-button');
  }

  public startOrRestart(): void {
    if (this.state !== GAME_STATE.INIT) {
      this.restartGame();
    }
    this.state = GAME_STATE.STARTED;
    this.controlButton.setAttribute('disabled', 'disabled');
    this.renderer.setElementClass(this.element.nativeElement, 'counter', true);
    this.counterTimeout = setTimeout( () => {
      clearTimeout(this.counterTimeout);
      let computerTurn = this.computerTurn();
      this.state = this.getResults(computerTurn, this.userShape);
      this.renderer.setElementClass(this.element.nativeElement, 'counter', false);
      this.controlButton.removeAttribute('disabled');
    }, TIMEOUT);
  }

  private userTurn(shape: SHAPES): void {
    if(this.state !== GAME_STATE.STARTED) {
      return;
    }
    this.showShape(this.playerHand, shape);
    this.userShape = shape;
  }

  public getStateClass(): any {
    return {
      init: this.state === GAME_STATE.INIT,
      win: this.state === GAME_STATE.WIN,
      loose: this.state === GAME_STATE.LOOSE,
      draw: this.state === GAME_STATE.DRAW
    };
  }

  private computerTurn(): SHAPES {
    let aiVote = this.aiService.doTurn();
    this.showShape(this.computerHand, aiVote);
    return aiVote;
  }

  private showShape(hand: HandComponent, shape: SHAPES) {
    hand.showShape(shape);
  }

  private getResults(computerShape: SHAPES, playerShape: SHAPES|null = null): GAME_STATE {
    if (playerShape === computerShape) {
      return GAME_STATE.DRAW;
    }

    switch (playerShape) {
      case SHAPES.PAPER:
        if (computerShape === SHAPES.ROCK) {
          return GAME_STATE.WIN;
        }
      break;

      case SHAPES.ROCK:
        if (computerShape === SHAPES.SCISSORS) {
          return GAME_STATE.WIN;
        }
      break;

      case SHAPES.SCISSORS:
        if (computerShape === SHAPES.PAPER) {
          return GAME_STATE.WIN;
        }
      break;
    }
    return GAME_STATE.LOOSE;
  }

  private restartGame(): void {
    this.state = GAME_STATE.INIT;
    this.computerHand.clear();
    this.playerHand.clear();
    this.userShape = null;
    this.renderer.setElementClass(this.element.nativeElement, 'counter', false);
    clearTimeout(this.counterTimeout);
  }
}
