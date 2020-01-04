import {createAction, props} from '@ngrx/store';

export interface ILRCState {
  players: Array<Player>;
}

export const DEFAULT_CHIP_COUNT = 4;

export class Player {
  chipCount = DEFAULT_CHIP_COUNT;
  index: number;
}


export const passLeft = createAction('[LeftRightCenter Page] Pass Left', props<{index: number}>());
export const passRight = createAction('[LeftRightCenter Page] Pass Right', props<{ index: number}>());
export const passCenter = createAction('[LeftRightCenter Page] Pass Center', props<{ index: number}>());
export const initializePlayers = createAction('[LeftRightCenter Page] Initialize', props<{playerCount: number, chipCount?: number}>());
