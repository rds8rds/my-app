import React, { Component } from "react";
import Admin from "./components/admin-profle.component";
import EmployeeProfile from "./components/employee-profile.component";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    employees: [
      {
        name: "Rudar Sarkar",
        position: "Software Engineer",
        about: " High sprit fella; Big fan of Habib vai ",
        facebook_link: "http://google.com", // object property underscore diye variable name kora hoy
        github_link: "http://google.com",
      },
      {
        name: "Dibbo Barua",
        position: "Senior Software Engineer",
        about: " Charming fella  ",
        facebook_link: "http://google.com",
        github_link: "http://google.com",
      },
      {
        name: "Abid Hasan Mahmud ",
        position: "React Specialist ",
        about: " Best Bro  ",
        facebook_link: "http://google.com",
        github_link: "http://google.com",
      },
      {
        name: "Dhruba Mitre",
        position: "Senior Software Engineer",
        about: " Efficient Multi-tastker ",
        facebook_link: "http://google.com",
        github_link: "http://google.com",
      },
    ],
    admin: {
      position: "Admin",
      name: "Rudra Sarkar",
      info: "I am an admin, I want to be a good programmer",
    },
  };
  render() {
    return (
      <>
        <Admin admin={this.state.admin} />
        <hr></hr>
        <div style={{ marginLeft: "20px" }}>
          {this.state.employees.map((employee, index) => {
            // index টা অটো জেনেরেট করে পাস করে দেয় ম্যাপ
            return <EmployeeProfile key={index} employee={employee} />;
          })}
        </div>
      </>
    );
  }
}

export default App;

// using random card from bootstrap website;
/*
 ** given tasks for this class:
 **
 ** Task-1: Create a new project named 'employee-management'
 ** Task-2: Cleadn the project files and create Hello world;
 ** Task-3: wrtie code of app.js;
 ** Task-4: make more 4 progiles of different employees;
 ** Task-5:
 **       a. make one 'employee-profile.component.js' file under 'components' folder
 **       b. reuse the component for 5 profiles with passing the props
 ** Task-6: manage a 'employee' states and render them dynamically
 ** Task-7: make a new component 'admin.component.js' and split code into app.js
 **
 */
