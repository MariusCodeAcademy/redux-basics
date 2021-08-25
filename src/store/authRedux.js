import { createSlice } from '@reduxjs/toolkit';
// 01 leisti priloginti vartotoja jei jo email ir pass atitinka user duomenis
const initAuthState = {
  isAuthetnticated: false,
  user: {
    email: 'mike@tyson.com',
    password: 'secret',
  },
  users: [
    {
      email: 'mike@tyson.com',
      password: 'secret',
    },
  ],
};
// authSlice
const authSlice = createSlice({
  name: 'authentication',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      // validate
      state.isAuthetnticated = true;
    },
    logout(state) {
      state.isAuthetnticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
