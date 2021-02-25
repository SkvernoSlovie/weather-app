import axios from 'axios';
import { Dispatch } from 'redux';
import { WeatherAction, WeatherActionsTypes } from '../types/weather';

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({
        type: WeatherActionsTypes.FETCH_WEATHER,
      });
      const response = await axios.get('url');
      dispatch({ type: WeatherActionsTypes.FETCH_WEATHER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: WeatherActionsTypes.FETCH_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке погоды',
      });
    }
  };
};
