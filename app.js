// const heading = React.createElement("h1", {id:"heading "}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM from "react-dom/client" is for React 18

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namste React 😀"),
    React.createElement("h2", {}, "I am the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am the h3 tag"),
    React.createElement("h4", {}, "I am the h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
