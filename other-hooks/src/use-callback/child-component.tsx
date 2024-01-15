// Type "useEffect" and press Tab
import React, { useEffect } from "react";

interface ChildComponentProps {
  name: string;
  onButtonClick: any;
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  name,
  onButtonClick,
}) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={onButtonClick}>Click me (from child)</button>
    </div>
  );
};

export default ChildComponent;
