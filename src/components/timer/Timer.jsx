import React from "react";
import { TriangleWithInput, TriangleStateful } from "../lifecycle/Triangle";

class Timer extends React.Component {
  state = { value: 0 };
  do = true;

  componentDidMount() {
    this.change(1);
  }

  componentDidUpdate() {
    this.change(1);
  }

  componentWillUnmount() {
    this.do = false;
  }

  change = x => {
    setTimeout(() => {
      if (this.do) this.setState({ value: this.state.value + x });
    }, 1000);
  };

  render() {
    return this.props.render(this.state.value);
  }
}

export default Timer;
