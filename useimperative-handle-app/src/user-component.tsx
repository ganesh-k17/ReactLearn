import React, { forwardRef, useImperativeHandle } from "react";

export interface UserComponentProps {
  name: string;
  phone: number;
  village: string;
}

export interface UserComponentMethods {
  DoSomething: () => void;
}

const UserComponent = React.forwardRef<
  UserComponentMethods,
  UserComponentProps
>((props: UserComponentProps, ref) => {
  React.useImperativeHandle(ref, () => ({
    // exposing DoSomething using useImperativeHandle hook in child Component
    DoSomething() {
      alert("I'm in DoSomething method");
    },
  }));

  return (
    <div style={{ backgroundColor: "red" }}>
      <div>{props.name}</div>
      <div>{props.phone}</div>
      <div>{props.village}</div>{" "}
    </div>
  );
});

export default UserComponent;
