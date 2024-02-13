import React, { Component } from "react";
import Counters from "./components/counters.component";
import Navbar from "./components/navbar.component";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Counters />
      </>
    );
  }
}
export default App;
