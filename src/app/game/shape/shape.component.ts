import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

export enum SHAPES  {
  ROCK = 1,
  SCISSORS = 2,
  PAPER = 3
};

@Component({
  selector: 'rsp-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @Input('shape') public shape: SHAPES;
  @Output('turn') public turn: EventEmitter<SHAPES> = new EventEmitter<SHAPES>();
  constructor() { }

  @HostListener('click')
  public doTurn(): void {
    this.turn.emit(this.shape);
  }

  ngOnInit() {
  }

  public getShapeClass(): any {
    return {
      'fa-hand-rock-o': this.shape === SHAPES.ROCK,
      'fa-hand-scissors-o': this.shape === SHAPES.SCISSORS,
      'fa-hand-paper-o': this.shape === SHAPES.PAPER
    }
  }

}
