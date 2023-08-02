import React from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import { useSelector} from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const username = useSelector((state) => state.user.userName);
    const token = localStorage.getItem("token");
    const handleSignOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
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
        {token ? (
          <div>
            <NavLink to={"/profile"}>
              <div className="main-nav-item" href="../img/logo_profil.png">
                <i className="fa fa-user-circle"></i>
                  {username}
              </div>
            </NavLink>
            <NavLink className="main-nav-item" onClick={handleSignOut} to={"/"}>
              <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
    </header>
  );
};

export default Header;