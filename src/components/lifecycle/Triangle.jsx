import React from "react";

function Triangle({ baseSize, children }) {
  if (baseSize < 0) return <br />;
  const next = baseSize - 1;
  const row = [];
  for (let i = 0; i < baseSize; i++) row.push(children);
  return (
    <React.Fragment>
      <Triangle baseSize={next}>{children}</Triangle>
      <br />
      {row}
    </React.Fragment>
  );
}

export class TriangleStateful extends React.Component {
  state = { baseSize: 0 };

  onChange = e => {
    const newBaseSize = e.target.value;
    window.gas = newBaseSize;
    if (isNaN(newBaseSize)) return;
    const newState = {
      baseSize: newBaseSize
    };
    this.setState(newState);
  };

  get baseSizeAsNumber() {
    return this.state.baseSize == "" ? 0 : parseInt(this.state.baseSize);
  }

  render() {
    const input = (
      <input value={this.state.baseSize} onChange={this.onChange} />
    );
    const addedBaseSize = this.baseSizeAsNumber + this.props.plus;
    if (addedBaseSize < 1) return input;
    const children = this.props.children;
    let row;
    let rows = [];
    for (let rowSize = 1; rowSize <= addedBaseSize; rowSize++) {
      row = [];
      for (let i = 0; i < rowSize; i++) row.push(children);
      rows.push(<div key={rowSize}>{row}</div>);
    }
    console.log(rows);
    return (
      <React.Fragment>
        {input}
        {rows}
      </React.Fragment>
    );
  }
}

export class TriangleWithInput extends React.Component {
  state = { baseSize: 0 };

  onChange = e => {
    const newState = {
      baseSize: e.target.value
    };
    if (!isNaN(newState.baseSize)) this.setState(newState);
  };

  render() {
    const baseSize = this.state.baseSize;
    const children = this.props.children;
    return (
      <React.Fragment>
        <input value={baseSize} onChange={this.onChange} />
        <br />
        <Triangle baseSize={baseSize}>{children}</Triangle>
      </React.Fragment>
    );
  }
}

export default Triangle;
