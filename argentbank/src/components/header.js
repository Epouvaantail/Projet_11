import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../img/argentBankLogo.png";

function getCurrentURL () {
  return window.location.href
};

const url = getCurrentURL()
if (url === "http://localhost:3000/user") {
  console.log("User page loaded successfully!")
  const bleu = document.querySelector(".main-nav")
  console.log(bleu)
  // .insertAdjacentHTML('afterbegin', `
  // <a class="main-nav-item" href="./user.html">
  //   <i class="fa fa-user-circle"></i>
  //   Tony
  // </a>
  // <a class="main-nav-item" href="./index.html">
  //   <i class="fa fa-sign-out"></i>
  //   Sign Out
  // </a>
  // `)
}

const Header = () => {
  return (
    <header className="nav__container">
      <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
    </header>
  );
};

export default Header;