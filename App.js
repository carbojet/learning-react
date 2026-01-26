


const renderBlock = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "heading1" }, "Namaste React!!!"),
    React.createElement("h2", { id: "heading2" }, "Namaste React!!!")
  ],
);

const domRoot = ReactDOM.createRoot(document.getElementById("root"));
domRoot.render(renderBlock);

