import { Injectable } from '@angular/core';
import { SHAPES } from './../index';

@Injectable()
export class AIPlayerService {
  private possibleShapes: any[] = [];
  constructor() {
    this.possibleShapes = Object.keys(SHAPES).map( shape => parseInt(shape, 10)).filter( value => !isNaN(value));
  }

  public doTurn(): SHAPES {
    let randNumber = Math.floor(Math.random() * this.possibleShapes.length);
    return <SHAPES> this.possibleShapes[randNumber];
  }

}
