import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
  geolocation: locationReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
