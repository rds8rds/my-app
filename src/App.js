import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import Movies from "./components/movies.component";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Movies />
      </>
    );
  }
}
export default App;
