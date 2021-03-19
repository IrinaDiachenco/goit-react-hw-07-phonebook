import axios from 'axios';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
  addContactRequest,
  deleteContactRequest,
  fetchContactsRequest,
  addContactError,
  deleteContactError,
  fetchContactsError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:3000/';

const fetchContacts = () =>  async dispatch => {
    dispatch(fetchContactsRequest());
    try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, phone }) => dispatch => {
  const contact = {
    name,
    phone,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

const operations = { fetchContacts, addContact, deleteContact };

export default operations;