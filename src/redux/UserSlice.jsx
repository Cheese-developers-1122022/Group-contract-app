import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: [],
};
export const UserSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.userData = actions?.payload;
    },
  },
});
export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
