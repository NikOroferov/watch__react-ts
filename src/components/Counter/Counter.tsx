import { Component } from "react";
import css from './Counter.module.css';

interface Props{
  initialValue: number;
  step: number;
}

interface State{
  value: number;
}

export default class Counter extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  state = {
    value: this.props.initialValue,
  };

  increment = () => {
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  decrement = () => {
    this.setState(({ value }) => ({ value: value - 1 }));
  };

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <div className={css.counter__countainer}>
        <strong>{value}</strong>
        <div className={css.counter__buttons}>
          <button onClick={this.increment}>+{step}</button>
          <button onClick={this.decrement}>-{step}</button>
        </div>
      </div>
    );
  }
}
