import React, { Component } from "react";
import Table from "./common/table.component";

class Students extends Component {
  state = {
    headers: ["roll no", "name", "cgpa"],
    data: [
      { roll: 1, name: "Rudra", cgpa: 3.13 },
      { roll: 2, name: "Habib", cgpa: 3.99 },
      { roll: 3, name: "Dibbo", cgpa: 3.41 },
    ],
  };
  render() {
    const columns = [
      {
        label: "Roll_No",
        path: "roll",
        content: (item) => <td>{item} </td>,
      },
      { label: "Name", path: "name", content: (item) => <td>{item} </td> },
      { label: "CGPA", path: "cgpa", content: (item) => <td>{item} </td> },
    ];
    return (
      <>
        <Table
          headers={this.state.headers}
          data={this.state.data}
          columns={columns}
        />
      </>
    );
  }
}

export default Students;

/*
 ** column holds the structurul info of the table
 */
