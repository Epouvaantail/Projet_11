import React from "react";
import "../App.css";
import Button from "./button";

const Account = ({state, defaultState = false}) => {
  return (
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{state.title}</h3>
          <p className="account-amount">{state.amount}</p>
          <p className="account-amount-description">{state.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button 
          state={{
            title:"View transactions"
          }}
          />
        </div>
      </section>
  );
};
export default Account;