import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import Movies from "./components/movies.component";
import Students from "./components/students.components";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Movies />
        <Students />
      </>
    );
  }
}
export default App;
