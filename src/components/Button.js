import React from "react";

const Button = ({ title = "Button", handleOnClick }) => {
  return <button onClick={handleOnClick}>{title}</button>;
};

export default Button;
