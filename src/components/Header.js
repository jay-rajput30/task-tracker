import React from "react";
import Button from "./Button";

// import "./styles.css";
let Header = ({ text }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Button className="btn" text="add" />
    </header>
  );
};

Header.defaultProps = {
  text: "Task Tracker"
};

export default Header;
