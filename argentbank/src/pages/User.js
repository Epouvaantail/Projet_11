import React from "react";
import Button from "../components/button";

const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button 
          state={{
            title:"View transactions"
          }}
          />
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button 
          state={{
            title:"View transactions"
          }}
          />
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button 
          state={{
            title:"View transactions"
          }}
          />
        </div>
      </section>
    </main>
  );
};

export default User;

function getCurrentURL () {
  return window.location.href
};

const url = getCurrentURL()
if (url === "http://localhost:3000/user") {
  console.log("User page loaded successfully!")
  document.querySelector(".main-nav").insertAdjacentHTML('afterbegin', `
  <a class="main-nav-item" href="./user.html">
    <i class="fa fa-user-circle"></i>
    Tony
  </a>
  <a class="main-nav-item" href="./index.html">
    <i class="fa fa-sign-out"></i>
    Sign Out
  </a>
  `)
}