import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <>
        <h1>{this.props.admin.position}</h1>
        <h4>{this.props.admin.name} </h4>
        <h4>{this.props.admin.info} </h4>
      </>
    );
  }
}

export default Admin;
