import React, { Component } from "react";

class Project extends Component {
  //   handleDeleteProject = () => {
  //     alert("I need to delete");
  //     //this.props.handleDelete;
  //   };
  // but project is the child of projects and
  // it doesn't have the access to the data it needs to delete
  // so it needs a function object comming from parent

  render() {
    return (
      <>
        <h3>{this.props.name} </h3>
        <button onClick={this.props.handleDelete}> remove </button>
        <hr></hr>
      </>
    );
  }
}

export default Project;

// চাইল্ড থেকে প্যারেন্টের ফাংশনকে কল করাকে বলা হয়
// raise an evenet ;
