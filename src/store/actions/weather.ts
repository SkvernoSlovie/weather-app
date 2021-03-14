import axios from 'axios';
import { Dispatch } from 'redux';
import { WeatherAction, WeatherActionsTypes } from '../../types/weather';

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({
        type: WeatherActionsTypes.FETCH_WEATHER,
      });
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/onecall?lat=51.505&lon=-0.09&exclude={part}&appid=ea004e1764c5e81fcbda9290be083cb6',
      );
      dispatch({ type: WeatherActionsTypes.FETCH_WEATHER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: WeatherActionsTypes.FETCH_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке погоды',
      });
    }
  };
};
