import React from "react";
import ReactDOM from "react-dom/client";
const renderBlock = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "heading1" }, "Namaste React!!!"),
    React.createElement("h2", { id: "heading2" }, "Namaste React!!!")
  ],
);

//jsx version its html like syntax
const jsxBlock = <h1 id="heading1"> Hello JSX 🚀</h1>;

//jsx functional component
//its a javascript function that returns jsx
const HeaderComponent = function (){
  return (
    <div id="header"> 
      <h1> Hello from Header functional Component 🚀</h1>
      </div>
  );
}

//another way jsx functional component 
const AnotherHeaderComponent = () => (
  <div id="anotherHeader"> 
    <h1> Hello from Another Header functional Component 🚀</h1>
  </div>
);


//jsx class component
//render different components in root we need to compose then into one called component composition like we did below
class HeaderClassComponent extends React.Component {
  render() {
    return (
      <div id="headerClassComponent">
        <AnotherHeaderComponent />
        <h1> Hello from Header Class Component 🚀</h1>
      </div>
    );
  }
}



const domRoot = ReactDOM.createRoot(document.getElementById("root"));
domRoot.render(<HeaderComponent />);

