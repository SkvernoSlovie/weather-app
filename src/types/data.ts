export interface DataActions {
  type: DataActionTypes.SET_CURRENT_DATA;
  payload: Date;
}

export enum DataActionTypes {
  SET_CURRENT_DATA = 'SET_CURRENT_DATA',
}

export interface DataState {
  date: Date | null;
}
