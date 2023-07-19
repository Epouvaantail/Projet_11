import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { setLog } from "../redux/logSlice";
// import { NavLink } from "react-router-dom";

const SignIn = () => {
  const token = useSelector((state)=>state.SignIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  // on récupère la valeurs inscrite dans l'email
  const changeEmail = (event) => {
    setEmail(event.target.value)
  };
  // on récupère la valeurs inscrite dans le mot de passe
  const changePassword = (event) => {
    setPassword(event.target.value)
  };
  // au clique on récupère les infos pour les envoyés à l'api
  const onConnect = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    };
    fetch("http://localhost:3001/api/v1/user/login", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
   .then(response => {
    console.log(response)
          if(!response.ok) {
              // document.querySelector(".error").style.display = "inline"
              throw new Error('Identifiants incorrects');
          }
          return response.json();
      })
      .then(data => {
          sessionStorage.setItem('token', data.token);
          // console.log(data.body.token);
          const grabToken = data.body.token
          dispatch(setLog({grabToken}));
          navigate("/user");
      })
      .catch(error => {
          console.error(error);
      });
  };
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <form onSubmit={onConnect}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
            <div className="input-wrapper">
              <label htmlFor="Email">Email</label>
              <input onChange={changeEmail}value={email} type="Email" id="Email" autoComplete="Email" placeholder="Email"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input onChange={changePassword} value={password} type="password" id="password" autoComplete="off" placeholder="Password"/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <NavLink to="/user"> */}
              <button 
                className="sign-in-button"
                type="submit"
                >
                Sign In
              </button>
            {/* </NavLink> */}
        </form>
      </section>
    </main>
  );
};

export default SignIn;