import { DataActions, DataActionTypes, DataState } from '../../types/data';

const initialState: DataState = {
  date: null,
};

export const dataReducer = (state = initialState, action: DataActions): DataState => {
  switch (action.type) {
    case DataActionTypes.SET_CURRENT_DATA:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
