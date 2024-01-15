// Type "useEffect" and press Tab
import React, { useState, useCallback } from "react";
import ChildComponent from "./child-component";

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  const handleClick = useCallback(() => {
    console.log("calling handleClick");
    setCount(count + 1);
  }, [count]); // Only re-create the callback if the count state changes

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the name when the input value changes
    setName(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <ChildComponent name={name} onButtonClick={handleClick} />
      <input onChange={handleNameChange} />
      <p> Name: {name}</p>
      {/* <button onClick={handleName}>Set Name</button> */}
    </div>
  );
};

export default ParentComponent;
