import { Action, createReducer, on } from '@ngrx/store';
import * as LCRPageActions from '../actions/leftRightCenter.actions';

export const LCRInitialState: LCRPageActions.ILRCState = {
  players: new Array<LCRPageActions.Player>()
};

const LCRReducer = createReducer(LCRInitialState,
  on(LCRPageActions.initializePlayers, (state: LCRPageActions.ILRCState, action: { playerCount: number, chipCount?: number }) => {
    const newState = {
      players: new Array<LCRPageActions.Player>()
    };
    for (let i = 0; i < action.playerCount; i++) {
      newState.players[i] = new LCRPageActions.Player();
      newState.players[i].index = i;
      if (action.chipCount) {
        newState.players[i].chipCount = action.chipCount;
      }
    }

    return newState;
  }),
  on(LCRPageActions.passCenter, (state: LCRPageActions.ILRCState, action: { index: number }) => {
    const newState = {...state};
    newState.players[action.index].chipCount -= 1;
    return newState;
  }),
  on(LCRPageActions.passRight, (state: LCRPageActions.ILRCState, action: {index: number}) => {
    const newState = {...state};
    const nextPlayer = action.index + 1 >= newState.players.length ? 0 : action.index + 1;
    newState.players[action.index].chipCount -= 1;
    newState.players[nextPlayer].chipCount += 1;
    return newState;
  }),
  on(LCRPageActions.passLeft, (state: LCRPageActions.ILRCState, action: {index: number}) => {
    const newState = {...state};
    const nextPlayer = action.index - 1 < 0 ? newState.players.length - 1 : action.index - 1;
    newState.players[action.index].chipCount -= 1;
    newState.players[nextPlayer].chipCount += 1;
    return newState;
  }),
);

export function reducer(state: LCRPageActions.ILRCState | undefined, action: Action) {
  return LCRReducer(state, action);
}
