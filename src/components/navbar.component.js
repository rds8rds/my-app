import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button onClick={this.props.handleAdd} className="btn btn-primary">
          {" "}
          Add{" "}
        </button>
        <a className="navbar-brand">Active Cart : {this.props.activeCart}</a>
      </nav>
    );
  }
}

export default Navbar;
