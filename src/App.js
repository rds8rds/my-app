import React, { Component } from "react";
import Profile from "./components/profile.component";
import Projects from "./components/projects.component";
class App extends Component {
  render() {
    return (
      <>
        <Profile />
        <hr></hr>
        <Projects />
      </>
    );
  }
}

export default App;

// React.createElement ('h1', null ,'Hello World')

/*
 **  app component এর দুইটা child components আছে
 **  profile component আর projects component
 **
 */
