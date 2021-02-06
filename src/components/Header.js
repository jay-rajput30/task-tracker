import React from "react";
import Button from "./Button";
let Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <Button className="btn" text="add" />
    </>
  );
};

Header.defaultProps = {
  text: "Task Tracker"
};

export default Header;
