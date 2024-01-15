import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./use-callback/parent-component";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
