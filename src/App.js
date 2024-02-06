import React, { Component } from "react";
import Counter from "./components/counter.component";
import Navbar from "./components/navbar.component";

// functional component dia amra render() ke use korte parbo na

class App extends Component {
  state = {
    counters: [1, 2, 3, 4],
    handleCounters: [1],
  };
  handleRemove = () => {
    const counters = [...this.state.handleCounters];
    counters.pop();
    this.setState({ handleCounters: counters });
  };

  handleAdd = () => {
    const counters = [...this.state.handleCounters];
    counters.push(1);
    this.setState({ handleCounters: counters });
  };

  render() {
    return (
      // <> react fragment
      <>
        <Navbar />
        <button onClick={this.handleAdd} className="btn btn-primary">
          {" "}
          Add{" "}
        </button>

        {this.state.handleCounters.map((counter, index) => (
          <>
            <br />
            <Counter onRemove={this.handleRemove} key={index} />
          </>
        ))}

        {/* {this.state.counters.map((counter, index) => (
          <h1 key={index}>{counter}</h1>
        ))} */}
      </>
    );
  }
}

export default App;

// new nav bar
// modified counter component with css and button
// map function implementation on array
// new add button implementation
// *** home work ***
// props object passing from Apps to conter as onRemove
