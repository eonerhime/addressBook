import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 contacts: [],
};

const contactsSlice  = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    loadContacts(state, action){
      state.contacts = action.payload;
    },
  }
});

export const { loadContacts } = contactsSlice.actions;

export default contactsSlice.reducer;

export const getContacts = ((state)=> state.contacts);
