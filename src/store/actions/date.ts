import { Dispatch } from 'redux';
import { DateActions, DateActionTypes } from '../../types/date';

export const setCurrentData = () => {
  return (dispatch: Dispatch<DateActions>) => {
    const currentDate = new Date().getDay();
    dispatch({
      type: DateActionTypes.SET_CURRENT_DATA,
      payload: currentDate,
    });
  };
};
