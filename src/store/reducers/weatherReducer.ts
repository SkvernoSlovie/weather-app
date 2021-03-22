import { WeatherAction, WeatherActionsTypes, WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  data: {
    current: {
      temp: 0,
    },
  },
  loading: false,
  error: null,
};

const getCelciusFromKelvine = (obj: any) => {
  obj.current.temp = Math.round(obj.current.temp - 273.15);

  return obj;
};

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionsTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionsTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: getCelciusFromKelvine(action.payload) };
    case WeatherActionsTypes.FETCH_WEATHER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
