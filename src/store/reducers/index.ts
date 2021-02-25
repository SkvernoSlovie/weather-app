import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
  locationReducer,
  weatherReducer,
});
