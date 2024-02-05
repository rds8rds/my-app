import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (event) => {
    //this.state.count = this.state.count + 1; state wont change in this way
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (event) => {
    // this.setState((prevState) => ({
    //   // here argument is prevState which is a default parameter of state
    //   count: prevState.count === 0 ? 0 : prevState.count - 1,
    // }));
    // let's do it in a easy way;

    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <span style={{ marginLeft: "5px" }}>{this.state.count}</span>
        <button onClick={this.handleDecrement}>Increment</button>
      </>
    );
  }
}

export default Counter;

// imrc --> import react componect;
// cc --> class component;
