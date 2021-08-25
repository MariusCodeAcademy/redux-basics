import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterRedux';

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

// export store for use
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer,
  },
});

// console.log(counterSlice.actions); // visi musu aprasyti veiksmai

export const authActions = authSlice.actions;

export default store;

// panaudoti musu gilias js zinias su es6 import/export ir padalinti sita faila i atskirus
// counterRedux.js ir authRedux.js failus ir islaikyti ta pati funkcionaluma

// pranesti vartotojui jei neteisingai ivesti duomenys

// rodyti vartotojo emaila headeryje netoli logout mygtuko

// sukurti footeri, ir jame prideti logout mygtuka, padaryti veikianciu

// sukurti nauja componenta arba pernaudoti esama Auth componenta tam kad
// suteikti galimybe prisiregistruoti vartotojui.
// ivesties laukai turetu buti email, pass ir repeatPass
// suvedus email ir jei abu pass sutampa, mes pridedam vartotoja i authState.users masyva

// pakeisti prisiloginimo logika: ieskoti userio users masyve
