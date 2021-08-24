import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // automatiskai sukuria subscibe
  const showCounter = useSelector((state) => state.showCounter); // automatiskai sukuria subscibe

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "UP" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DOWN" });
  };
  const increaseHandler = () => {
    dispatch({ type: "UP_BY", amount: 6 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>UP</button>
            <button onClick={increaseHandler}>UP by ...</button>
            <button onClick={decrementHandler}>DOWN</button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
