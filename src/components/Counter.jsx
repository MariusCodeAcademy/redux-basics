import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // automatiskai sukuria subscibe
  const showCounter = useSelector((state) => state.counter.showCounter); // automatiskai sukuria subscibe

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // console.log(counterActions.up());
    dispatch(counterActions.up()); // grazina {type: 'automatiskai sugeneruotas pav'}
  };
  const decrementHandler = () => {
    dispatch(counterActions.down());
  };
  const increaseHandler = () => {
    dispatch(counterActions.inrcease(6)); // grazina {type: 'automatiskai sugeneruotas pav', payload: 6}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
