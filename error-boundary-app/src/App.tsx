import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./my-component/MyComponent";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  try {
    return (
      <div className="App">
        <ErrorBoundary>
          <MyComponent name={"Ganku"} />
        </ErrorBoundary>
      </div>
    );
  } catch (ex) {
    console.log(ex);
    return <>ERRor Pls Check! {ex}</>;
  }
}

export default App;
