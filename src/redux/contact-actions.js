
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
//import contactTypes from './contact-types';

// export const addContact = (name, phone) => ({
//     type: contactTypes.ADD,
//     payload: {
//         id: uuidv4(),
//         name: name,
//         phone: phone,
//     }
// });

export const addContact = createAction('contacts/add', (name, phone) => ({
    payload: {
      id: uuidv4(),
      name: name,
      phone: phone,
    }
}));

// export const deleteContact = contactId => ({
//   type: contactTypes.DELETE,
//   payload: contactId,
// });

export const deleteContact = createAction('contacts/delete');

// export const changeFilter = (filter) => ({
//   type: contactTypes.CHANGE_FILTER,
//   payload: { filter },
// });

export const changeFilter = createAction('contacts/changeFilter');

