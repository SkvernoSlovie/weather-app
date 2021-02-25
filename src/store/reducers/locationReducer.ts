import {
  UserLocationAction,
  UserLocationState,
  UserLocationActionTypes,
} from '../types/geolocation';

const initialState: UserLocationState = {
  geolocation: {},
  error: null,
};

export const locationReducer = (
  state = initialState,
  action: UserLocationAction,
): UserLocationState => {
  switch (action.type) {
    case UserLocationActionTypes.SET_GEOLOCATION:
      return { ...state, geolocation: action.payload };
    case UserLocationActionTypes.SET_GEOLOCATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
