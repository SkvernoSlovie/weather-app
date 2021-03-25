export interface UserLocationState {
  userGeo: any[] | null;
  error: null | string;
}
export interface UserSetLocation {
  type: UserLocationActionTypes.SET_GEOLOCATION;
  payload: any[];
}
export interface UserSetLocationError {
  type: UserLocationActionTypes.SET_GEOLOCATION_ERROR;
  payload: string;
}

export enum UserLocationActionTypes {
  SET_GEOLOCATION = 'SET_GEOLOCATION',
  SET_GEOLOCATION_ERROR = 'SET_GEOLOCATION_ERROR',
}

export type UserLocationAction = UserSetLocation | UserSetLocationError;
