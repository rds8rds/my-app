import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
    ],
  };

  handleIncrement = (id) => {
    //we need a fiind function;
    const counters = [...this.state.counters];
    const counter = this.state.counters.find((counter) => counter.id === id);
    counter.value += 1;
    this.setState({ counters: counters });
  };

  handleDecrement = (id) => {
    //we need a fiind function;
    const counters = [...this.state.counters];
    const counter = this.state.counters.find((counter) => counter.id === id);
    if (counter.value === 0) return;
    counter.value -= 1;
    this.setState({ counters: counters });
  };

  handleRemove = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id != id);
    this.setState({ counters: counters });
  };

  showNonZeroCounters = () => {
    let count = 0; // as the value changes let is our type
    this.state.counters.forEach((counter) => {
      if (counter.value > 0) count++;
    });
    return count;
  };

  render() {
    return (
      <>
        <h3>{this.showNonZeroCounters()}</h3>
        {this.state.counters.map((counter) => (
          <React.Fragment key={counter.id}>
            <Counter
              id={counter.id}
              value={counter.value}
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
              handleRemove={this.handleRemove}
            />
            {/* {return <Counter/ >;} is same as (<Counter />) */}
            <hr />
          </React.Fragment>
        ))}
      </>
    );
  }
}

export default Counters;
