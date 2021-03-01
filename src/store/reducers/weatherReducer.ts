import { WeatherAction, WeatherActionsTypes, WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  data: {},
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionsTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionsTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case WeatherActionsTypes.FETCH_WEATHER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
