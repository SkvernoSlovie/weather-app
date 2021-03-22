import { Dispatch } from 'redux';
import { DataActions, DataActionTypes } from '../../types/data';

export const setCurrentData = () => {
  return (dispatch: Dispatch<DataActions>) => {
    const currentDate = new Date();
    dispatch({
      type: DataActionTypes.SET_CURRENT_DATA,
      payload: currentDate,
    });
  };
};
