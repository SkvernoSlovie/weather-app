import * as GeoActionCreators from './geolocation';
import * as WeatherActionCreators from './weather';
import * as DateActionCreators from './date';

export default {
  ...GeoActionCreators,
  ...WeatherActionCreators,
  ...DateActionCreators,
};
