import React, { Component } from "react";

class Rating extends Component {
  state = {
    isHovered: false,
  };
  handleHover = () => {
    this.setState({ isHovered: true });
  };

  getClassName = () => {
    const { isHovered } = this.state;
    const { isRated } = this.props;

    let className = isRated ? "bi bi-star-fill" : "bi bi-star";
    className += isHovered ? " text-primary" : "";
    return className;
  };

  handleOut = () => this.setState({ isHovered: false });

  render() {
    const { id, handleToggleRating } = this.props;
    return (
      <i
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleOut}
        onClick={() => handleToggleRating(id)}
        className={this.getClassName()}
      ></i>
    );
  }
}

export default Rating;

/*
 ** class 17
 */
