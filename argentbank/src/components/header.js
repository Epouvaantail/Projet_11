import React from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../redux/store";
import { saveProfile } from "../redux/store";

const Header = () => {

  const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const username = saveProfile()
    console.log(username)
    const handleSignOut = () => {
        localStorage.removeItem("token");
        dispatch(deleteToken());
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
            <NavLink to={"/user"}>
              <div className="main-nav-item" href="../img/logo_profil.png">
                <i className="fa fa-user-circle"></i>
                  Tony
              </div>
            </NavLink>
            <NavLink className="main-nav-item" onClick={handleSignOut} to={"/"}>
              <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/signin">
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