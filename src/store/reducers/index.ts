import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';
import { dataReducer } from './dateReducer';

export const rootReducer = combineReducers({
  geolocation: locationReducer,
  weather: weatherReducer,
  date: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
