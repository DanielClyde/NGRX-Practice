import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Game, awayScore, homeScore, resetScore, setScores } from 'src/app/actions/scoreboard.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-scoreboard',
  templateUrl: './my-scoreboard.component.html',
  styleUrls: ['./my-scoreboard.component.scss']
})
export class MyScoreboardComponent {

  game$: Observable<Game>;

  constructor(private store: Store<{game: Game}>) {
    this.game$ = store.pipe(select('game'));
   }

  awayScore() {
    this.store.dispatch(awayScore());
  }

  homeScore() {
    this.store.dispatch(homeScore());
  }

  reset() {
    this.store.dispatch(resetScore());
  }

  setScores(home: number, away: number) {
    const game = new Game();
    game.away = away;
    game.home = home;
    this.store.dispatch(setScores({game}));
  }

}
