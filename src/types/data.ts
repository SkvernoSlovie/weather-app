export interface DataActions {
  type: DataActionTypes.SET_CURRENT_DATA;
  payload: number;
}

export enum DataActionTypes {
  SET_CURRENT_DATA = 'SET_CURRENT_DATA',
}

export interface DataState {
  date: string[] | string;
  time: string;
  day: string;
}
