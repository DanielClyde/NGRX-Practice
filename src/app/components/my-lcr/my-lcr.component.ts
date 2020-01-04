import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ILRCState, passLeft, passRight, passCenter, initializePlayers } from 'src/app/actions/leftRightCenter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-lcr',
  templateUrl: './my-lcr.component.html',
  styleUrls: ['./my-lcr.component.css']
})
export class MyLcrComponent implements OnInit {

  gameState$: Observable<ILRCState>;

  constructor(private store: Store<{lcr: ILRCState}>) {
    this.gameState$ = store.pipe(select('lcr'));
  }

  ngOnInit() {
    this.gameState$.subscribe((state) => console.log(state));
    this.initializeGame();
    this.passCenter(0);
    this.passLeft(1);
    this.passRight(2);
  }

  initializeGame() {
    this.store.dispatch(initializePlayers({playerCount: 5, chipCount: 5}));
  }

  passLeft(index: number) {
    this.store.dispatch(passLeft({index}));
  }

  passRight(index: number) {
    this.store.dispatch(passRight({index}));
  }

  passCenter(index: number) {
    this.store.dispatch(passCenter({index}));
  }

}
