import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="http://imdb.com">
            <i
              className="bi bi-film"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            {/* <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            /> */}
            IMDB
          </a>
        </nav>
      </>
    );
  }
}

export default Navbar;
