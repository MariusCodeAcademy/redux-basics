import { createStore } from "redux";

const initialCounterState = { counter: 0, showCounter: true };
// reducer funkcija
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "UP":
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
