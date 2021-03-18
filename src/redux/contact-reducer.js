
//import contactTypes from './contact-types';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contact-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactTypes.ADD:
//       return [payload, ...state];

//     case contactTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, {payload}) => payload,
})

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});