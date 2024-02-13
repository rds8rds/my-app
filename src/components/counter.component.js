import React, { Component } from "react";

class Counter extends Component {
  handle = () => {
    this.props.handleIncrement(this.props.id);
  };

  render() {
    const { id, value, handleIncrement, handleDecrement, handleRemove } =
      this.props;
    return (
      <>
        <div style={{ margin: "20px " }}>
          <button
            onClick={() => handleIncrement(id)}
            className="btn btn-primary"
          >
            +
          </button>
          <h4>{this.props.value}</h4>
          <button
            onClick={() => handleDecrement(id)}
            className="btn btn-primary"
          >
            -
          </button>
          <button onClick={() => handleRemove(id)} className="btn btn-allert">
            {" "}
            Remove{" "}
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
