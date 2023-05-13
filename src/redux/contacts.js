import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsItemsSlice = createSlice({
  name: 'items',
  initialState:
    JSON.parse(localStorage.getItem('contacts')) || initialContacts || [],
  reducers: {
    handleAddContact: (state, action) => [...state, action.payload],
    handleRemoveContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});
// console.log("contactsItemsSlice", contactsItemsSlice);
export const { handleAddContact, handleRemoveContact } =
  contactsItemsSlice.actions;
export const { filterContact } = contactsFilterSlice.actions;

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});
export default contactsReducer;
