import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
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

  render() {
    return (
      <div className="d-flex flex-row">
        <span className="p-2"> Quantity </span>
        <button
          disabled={this.disableDecresebutton()} /* full function passing  */
          className="p-2 btn btn-primary"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span className="p-2"> {this.state.count} </span>
        <button className="p-2 btn btn-primary" onClick={this.handleIncrement}>
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
