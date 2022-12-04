import { useState } from "react";
import css from './Counter.module.css';

interface Props{
  initialValue?: number;
  step?: number;
}
const CounterFn = ({initialValue = 0, step = 1}: Props) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div className={css.counter__countainer}>
      <strong>{counter}</strong>
      <div className={css.counter__buttons}>
        <button onClick={increment}>+{step}</button>
        <button onClick={decrement}>-{step}</button>
      </div>
    </div>
  );
}

export default CounterFn;