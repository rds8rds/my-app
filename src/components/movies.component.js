import React, { Component } from "react";
import Table from "./common/table.component";

class Movies extends Component {
  state = {
    headers: ["ID", "First Name", "Last Name", "Handle"],
    movies: [
      {
        id: 1,
        first_name: "Rudra",
        last_name: "Sarkar",
        handle: "@rudras",
      },
      {
        id: 2,
        first_name: "Habib",
        last_name: "Rahman",
        handle: "@hbahi",
      },
      {
        id: 3,
        first_name: "Neha",
        last_name: "Sarkar",
        handle: "@neha",
      },
    ],
  };
  render() {
    const columns = [
      { label: "ID", path: "id", content: (item) => <td>{item}</td> },
      {
        label: "First Name",
        path: "first_name",
        content: (item) => <td>{item}</td>,
      },
      {
        label: "Last Name",
        path: "last_name",
        content: (item) => <td>{item}</td>,
      },
      { label: "Handle", path: "handle", content: (item) => <td>{item}</td> },
    ];
    return (
      <>
        <Table
          headers={this.state.headers}
          data={this.state.movies}
          columns={columns}
        />
      </>
    );
  }
}

export default Movies;

/*
 ** columns array টা মুভি table এর কয়টা column আছে সেই info পাস করে
 */
