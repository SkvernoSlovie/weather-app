import * as GeoActionCreators from './geolocation';
import * as WeatherActionCreators from './weather';

export default {
  ...GeoActionCreators,
  ...WeatherActionCreators,
};
