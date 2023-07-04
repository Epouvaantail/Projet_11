import React from "react";
import "../App.css";

const Feature = ({state, defaultState = false}) => {
  return (
    <div className="feature-item">
          <img src={state.source} alt={state.alt} className="feature-icon" />
          <h3 className="feature-item-title">{state.title}</h3>
          <p>{state.description}</p>
    </div>
  );
};
export default Feature;