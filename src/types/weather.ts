export interface WeatherState {
  data: {
    current: {
      temp: number;
      weather?: any[];
      clouds?: number;
      sunrise?: number;
      sunset?: number;
      uvi?: number;
      pressure?: number;
      humidity?: number;
      wind_speed?: number;
    };
    timezone?: string;
    daily?: any[];
    hourly?: any[];
  };
  loading: boolean;
  error: null | string;
  fahrenheit: number;
}

export enum WeatherActionsTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_SEARCH_WEATHER_SUCCESS = 'FETCH_SEARCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
  GET_FAHRENHEIT_TEMP = 'GET_FAHRENHEIT_TEMP',
}

export interface FetchWeatherAction {
  type: WeatherActionsTypes.FETCH_WEATHER;
}

export interface FetchWeatherSuccessAction {
  type: WeatherActionsTypes.FETCH_WEATHER_SUCCESS;
  payload: {
    current?: {
      temp?: number;
    };
  };
}

export interface GetFahrenheitTemp {
  type: WeatherActionsTypes.GET_FAHRENHEIT_TEMP;
}

export interface FetchWeatherErrorAction {
  type: WeatherActionsTypes.FETCH_WEATHER_ERROR;
  payload: string;
}

export type WeatherAction =
  | FetchWeatherAction
  | FetchWeatherErrorAction
  | FetchWeatherSuccessAction
  | GetFahrenheitTemp;
