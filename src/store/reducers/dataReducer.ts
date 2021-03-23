import { DataActions, DataActionTypes, DataState } from '../../types/data';

const initialState: DataState = {
  date: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  time: new Date().toLocaleTimeString().slice(0, 5),
  day: '',
};

console.log(initialState.date[2])
export const dataReducer = (state = initialState, action: DataActions): DataState => {
  switch (action.type) {
    case DataActionTypes.SET_CURRENT_DATA:
      return { ...state, day: state.date[action.payload] };
    default:
      return state;
  }
};
