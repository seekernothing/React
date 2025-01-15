// const heading = React.createElement("h1", {id:"heading "}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am the h1 tag"),
    React.createElement("h2", {}, "I am the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am the h3 tag"),
    React.createElement("h4", {}, "I am the h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(parent)

