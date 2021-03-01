import { Dispatch } from 'redux';
import { UserLocationAction, UserLocationActionTypes } from '../../types/geolocation';

export const setGeolocation = () => {
  return (dispatch: Dispatch<UserLocationAction>) => {
    if (localStorage.getItem('geolocation')) {
      const geolocation = localStorage.getItem('geolocation');
      console.log(geolocation?.split(',').map((el) => Number(el)));
      const coord = geolocation?.split(',').map((el) => Number(el));
      dispatch({
        type: UserLocationActionTypes.SET_GEOLOCATION,
        payload: coord ? coord : [51.505, -0.09],
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          localStorage.setItem('geolocation', `${[latitude, longitude]}`);
          dispatch({
            type: UserLocationActionTypes.SET_GEOLOCATION,
            payload: [latitude, longitude],
          });
        },
        () => dispatch({ type: UserLocationActionTypes.SET_GEOLOCATION_ERROR, payload: 'Error' }),
        {
          enableHighAccuracy: true,
        },
      );
    }
  };
};
