import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// single page application ==> react

/*
  1. App class এর একটি instance create হবে 
  2. সেই instance App class এর render method কে call  করবে

  <App/> এই মানে হচ্ছে -> 
  {
    const obj = new App();
    obj.render();
  }
  এই দুটি একই কথা 

*/
