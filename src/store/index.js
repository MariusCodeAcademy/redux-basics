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

// authSlice
const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthetnticated: false },
  reducers: {
    login(state) {
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
