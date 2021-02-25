import { Dispatch } from 'redux';
import { UserLocationAction, UserLocationActionTypes } from '../types/geolocation';

export const setGeolocation = () => {
  return (dispatch: Dispatch<UserLocationAction>) => {
    if (localStorage.getItem('geolocation')) {
      const userGeolocation = localStorage.getItem('geolocation');
      dispatch({
        type: UserLocationActionTypes.SET_GEOLOCATION,
        payload: { coords: userGeolocation },
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          localStorage.setItem('geolocation', `${coords}`);
          dispatch({ type: UserLocationActionTypes.SET_GEOLOCATION, payload: { coords } });
        },
        () => dispatch({ type: UserLocationActionTypes.SET_GEOLOCATION_ERROR, payload: 'Error' }),
        {
          enableHighAccuracy: true,
        },
      );
    }
  };
};
