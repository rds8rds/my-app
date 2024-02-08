import React, { Component } from "react";

class EmployeeProfile extends Component {
  render() {
    return (
      <>
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
          <div
            className="card-header"
            style={{ fontWeight: "bold", fontFamily: "Arial" }}
          >
            {this.props.employee.name}
          </div>
          <div className="card-body text-primary">
            <h5 className="card-title">{this.props.employee.position}</h5>
            <p className="card-text">
              {this.props.employee.about +
                " He is also a good person from RUET"}
            </p>
            <a
              style={{ paddingRight: "5px" }}
              href={this.props.employee.facebook_link}
            >
              Facebook
            </a>
            <a href={this.props.employee.github_link}>Github</a>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeeProfile;
