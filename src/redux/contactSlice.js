import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name } = action.payload;
      const existingContact = state.contacts.find(
        contact => contact.name === name
      );

      if (existingContact) {
        alert(`This contact ${existingContact.name} already exists.`);
        return;
      }

      state.contacts.push({ ...action.payload, id: nanoid() });
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;

export default contactSlice.reducer;
