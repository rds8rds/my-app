import React, { Component } from "react";
import Project from "./project.component";

class Projects extends Component {
  state = {
    projects: ["Android Game Teris", "Android Clock", "React Crash Course"],
  };

  handleDeleteProject = () => {
    console.log("message from parents ");
  };
  render() {
    return (
      <>
        <h1>My Projects</h1>
        {this.state.projects.map((name) => {
          return (
            <Project
              key={name}
              name={name}
              handleDelete={this.handleDeleteProject}
            />
          );
        })}
      </>
    );
  }
}

export default Projects;

// map made the changes also return it to original array
