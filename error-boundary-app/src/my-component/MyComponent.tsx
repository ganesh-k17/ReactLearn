import React, { FC, useEffect } from "react";

type MyComponentProps = {
  name: string;
};

const MyComponent: FC<MyComponentProps> = ({ name }) => {
  useEffect(() => {
    console.log("UseEffect");
  });
  throw new Error("Error from my Component");
  return <div>{name}</div>;
};

export default MyComponent;
