import React from "react";

class LifecycleLogger extends React.Component {
  state = { flag: false };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillMount() {
    console.log("--BIRTH/MOUNTING INIT--");
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("--BIRTH/MOUNTING END--");
  }

  componentWillReceiveProps(nextProps) {
    console.log("--GROWTH/UPDATE INIT--");
    console.log("componentWillReceiveProps");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("--GROWTH/UPDATE END--");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    const { value, constant } = this.props;
    const isEven = this.props.value % 2;
    return isEven && !constant ? "**" : "*";
  }
}

export default LifecycleLogger;
