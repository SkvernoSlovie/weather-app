export interface DateActions {
  type: DateActionTypes.SET_CURRENT_DATA;
  payload: number;
}

export enum DateActionTypes {
  SET_CURRENT_DATA = 'SET_CURRENT_DATA',
}

export interface DateState {
  date: string[];
  time: string;
  day: string;
  dayIndex: number;
}
