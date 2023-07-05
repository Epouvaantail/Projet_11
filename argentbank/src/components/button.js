import React from "react";
import "../App.css";

const Button = ({state, defaultState = false}) => {
  return (
    <button className="transaction-button">{state.title}</button>
  );
};
export default Button;