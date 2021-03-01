export interface WeatherState {
    data: object;
    loading: boolean;
    error: null | string;
  }
  
  
  
  export enum WeatherActionsTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
  }
  
  export interface FetchWeatherAction {
    type: WeatherActionsTypes.FETCH_WEATHER;
  }
  
  export interface FetchWeatherSuccessAction {
    type: WeatherActionsTypes.FETCH_WEATHER_SUCCESS;
    payload: object;
  }
  
  export interface FetchWeatherErrorAction {
    type: WeatherActionsTypes.FETCH_WEATHER_ERROR;
    payload: string;
  }
  
  export type WeatherAction = FetchWeatherAction | FetchWeatherErrorAction | FetchWeatherSuccessAction;