import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const domRoot = ReactDOM.createRoot(document.getElementById("root"));
domRoot.render(<App />);

