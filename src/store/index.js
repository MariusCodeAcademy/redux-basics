import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

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

const store = configureStore({
  reducer: counterSlice.reducer,
});

console.log(counterSlice.actions); // visi musu aprasyti veiksmai

export const counterActions = counterSlice.actions;
export default store;
