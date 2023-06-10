import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const { addContacts } = contactSlice.actions;
export default contactSlice.reducer;
