import { DateActions, DateActionTypes, DateState } from '../../types/date';

const initialState: DateState = {
  date: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  time: new Date().toLocaleTimeString().slice(0, 5),
  day: '',
  dayIndex: 0,
};

console.log(initialState.date[2]);
export const dataReducer = (state = initialState, action: DateActions): DateState => {
  switch (action.type) {
    case DateActionTypes.SET_CURRENT_DATA:
      return { ...state, day: state.date[action.payload], dayIndex: action.payload };
    default:
      return state;
  }
};
