import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// naudojant toolkit mes kuriam createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    up(state) {
      state.counter++; // automatiskai perdaroma i state nemutuojancia sintakse naudojant immer
    },
    down(state) {
      state.counter--;
    },
    inrcease(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 01 leisti priloginti vartotoja jei jo email ir pass atitinka user duomenis
const initAuthState = {
  isAuthetnticated: false,
  user: {
    email: "mike@tyson.com",
    password: "secret",
  },
};
// authSlice
const authSlice = createSlice({
  name: "authentication",
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
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// console.log(counterSlice.actions); // visi musu aprasyti veiksmai

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;

// panaudoti musu gilias js zinias su es6 import/export ir padalinti sita faila i atskirus
// counterRedux.js ir authRedux.js failus ir islaikyti ta pati funkcionaluma
