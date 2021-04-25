import { WeatherAction, WeatherActionsTypes, WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  data: {
    current: {
      temp: 0,
    },
  },
  loading: false,
  error: null,
  fahrenheit: 0,
};

interface HourArr {
  temp: number;
}

const getCelciusFromKelvine = (obj: any) => {
  obj.current.temp = Math.round(obj.current.temp - 273.15);

  obj.hourly = obj.hourly.map(
    (hour: HourArr) => (hour = { ...hour, temp: (hour.temp = Math.round(hour.temp - 273.15)) }),
  );

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
    case WeatherActionsTypes.GET_FAHRENHEIT_TEMP:
      return { ...state, fahrenheit: 10 };
    default:
      return state;
  }
};
