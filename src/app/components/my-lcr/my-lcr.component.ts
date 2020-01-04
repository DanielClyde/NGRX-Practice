import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ILRCState, passLeft, passRight, passCenter, initializePlayers, Player } from 'src/app/actions/leftRightCenter.actions';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

export enum DiceValues {
  KEEP = 0,
  CENTER = 1,
  LEFT = 2,
  RIGHT = 3
}
@Component({
  selector: 'app-my-lcr',
  templateUrl: './my-lcr.component.html',
  styleUrls: ['./my-lcr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLcrComponent implements OnInit {

  public DiceValues = DiceValues;
  public playerTurn: number;
  public lastRoll: { player: number, roll: DiceValues[] };

  private gameState$: Observable<ILRCState>;
  public game: ILRCState;

constructor(private store: Store < { lcr: ILRCState } >, private cd: ChangeDetectorRef) {
  this.gameState$ = store.pipe(select('lcr'));
}

ngOnInit() {
  this.gameState$.subscribe((state) => {
    this.game = state;
    console.log(this.game);
    this.cd.markForCheck();
  });
  this.initializeGame();
}

  private initializeGame() {
  this.playerTurn = 0;
  this.store.dispatch(initializePlayers({ playerCount: 5, chipCount: 5 }));
}

  public passLeft(index: number) {
  this.store.dispatch(passLeft({ index }));
}

  public passRight(index: number) {
  this.store.dispatch(passRight({ index }));
}

  public passCenter(index: number) {
  this.store.dispatch(passCenter({ index }));
}

  public takeTurn() {
  this.lastRoll = { player: this.playerTurn, roll: this.rollDice(this.playerTurn) };
  console.log('Player: ' + this.playerTurn);
  console.log('Rolled: ', this.lastRoll.roll);
  _.forEach(this.lastRoll.roll, (val) => {
    switch (val) {
      case DiceValues.KEEP:
        break;
      case DiceValues.CENTER:
        this.passCenter(this.playerTurn);
        break;
      case DiceValues.LEFT:
        this.passLeft(this.playerTurn);
        break;
      case DiceValues.RIGHT:
        this.passRight(this.playerTurn);
        break;
      default:
        break;
    }
  });
  if (this.hasWinner()) {
    console.log('WINNER');
  }
  this.nextPlayer();
  this.cd.markForCheck();
}

  private nextPlayer() {
  if (this.playerTurn < this.game.players.length - 1) {
    this.playerTurn++;
  } else {
    this.playerTurn = 0;
  }
}

  private hasWinner() {
  const hasChips = _.countBy(this.game.players, (p: Player) => {
    return p.chipCount > 0;
  });
  return hasChips.true === 1;
}

  private rollDice(playerIndex: number): DiceValues[] {
  const numOfDiceToRoll = Math.min(this.game.players[playerIndex].chipCount, 3);
  const diceResult: DiceValues[] = [];
  for (let i = 0; i < numOfDiceToRoll; i++) {
    diceResult.push(_.random(0, 3));
  }

  return diceResult;
}

}
