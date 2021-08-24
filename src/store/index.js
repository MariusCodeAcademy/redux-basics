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
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// reducer funkcija
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "UP":
      //   state.counter++; // tiesiogiai keiciam state / mutuojam jo reiksme
      //   return state; // taip NIEKADA NEDARYTI !!!!!!!!!!!

      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "DOWN":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "UP_BY":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

// store sukurimas
const store = createStore(counterReducer);

export default store;
