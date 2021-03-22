import * as GeoActionCreators from './geolocation';
import * as WeatherActionCreators from './weather';
import * as DateActionCreators from './data';

export default {
  ...GeoActionCreators,
  ...WeatherActionCreators,
  ...DateActionCreators,
};
