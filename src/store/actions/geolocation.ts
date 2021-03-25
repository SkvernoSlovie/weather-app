import { Dispatch } from 'redux';
import { UserLocationAction, UserLocationActionTypes } from '../../types/geolocation';


export const setGeolocation = () => {
  return async (dispatch: Dispatch<UserLocationAction>) => {
    if (localStorage.getItem('geolocation')) {
      const geolocation = localStorage.getItem('geolocation');
      const coord = geolocation?.split(',').map((el) => Number(el));
      coord &&
        dispatch({
          type: UserLocationActionTypes.SET_GEOLOCATION,
          payload: coord,
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
