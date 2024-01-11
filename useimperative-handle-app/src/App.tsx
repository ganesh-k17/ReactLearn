import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./user-component";

function App() {
  const ref = useRef<any>(null);
  return (
    <div>
      <UserComponent ref={ref} name="Vijay" phone={5} village="Nagercoil" />
      <div>
        <button
          onClick={() => {
            if (ref && ref.current && ref.current.DoSomething)
              // call the method in child component - UserComponent
              ref.current.DoSomething();
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
