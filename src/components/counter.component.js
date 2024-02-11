import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleDecrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  disableDecresebutton = () => {
    return this.state.count === 0;
  };

  handleRemove = () => {
    if (this.props.onRemove) {
      this.props.onRemove();
    }
  };

  handleClick = (param1, param2, flag) => {
    param1();
    if (flag && this.state.count == 0) param2();
    else if (!flag && this.state.count == 1) param2();
  };

  render() {
    return (
      <div className="d-flex flex-row">
        <span className="p-2"> Quantity </span>
        <button
          disabled={this.disableDecresebutton()} /* full function passing  */
          className="p-2 btn btn-primary"
          onClick={() =>
            this.handleClick(
              this.handleDecrement,
              this.props.activeCartDec,
              false
            )
          }
        >
          -
        </button>
        <span className="p-2"> {this.state.count} </span>
        <button
          className="p-2 btn btn-primary"
          onClick={() =>
            this.handleClick(
              this.handleIncrement,
              this.props.activeCartInc,
              true
            )
          }
        >
          +
        </button>
        <button
          style={{ marginLeft: "5px" }} /* taking spaces */
          onClick={this.handleRemove}
          className="btn btn-primary"
        >
          {" "}
          Remove{" "}
        </button>
      </div>
    );
  }
}

export default Counter;
