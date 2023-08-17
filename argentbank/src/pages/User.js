import React, { useEffect } from "react";
import Account from "../components/account";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../redux/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const username = useSelector((state) => state.user.userName);
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/")
  }

// fetch pour récupérer les données utilisateurs
useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
    });
    const dataresponse = await response.json();
    console.log(dataresponse)
    dispatch(setProfile(dataresponse.body));
  }
  fetchData();
}, [dispatch, token]);

// formulaire d'édition du pseudo, ouverture/fermeture
  const [isEdit, setIsEdit] = useState(false);
     const handleEdit = () => {
       setIsEdit(!isEdit);
     };

     const [userName, setUserName] = useState("");

  const changeUsername = (event) => {
    setUserName(event.target.value);
  };

  // envoie du formulaire de modification du pseudo
  async function fetchUserName(event) {
    event.preventDefault();
    const fetchData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: userName }),
    };

    const response = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      fetchData
    );

    if (!response.ok) {
      throw new Error('Valeurs incorrect');
    };

    const data = await response.json();
    console.log(data);
    // window.location.reload();
    dispatch(setProfile(data.body));
    handleEdit()
  }

  return (
    <main className="main bg-dark">
      {isEdit ? (
          <form  className="edit-mode">
            <h1>Edit user info</h1>
            <div className="input-part">
              <div className="input">
                <p>User Name:</p>
                <input onChange={changeUsername} placeholder={username} value={userName} className="edit-input" type="username"/>
              </div>
              <div className="input">
                <p>Fisrt Name:</p>
                <input placeholder={firstName} className="nonedit-input" disabled/>
              </div>
              <div className="input">
                <p>Last Name:</p>
                <input placeholder={lastName} className="nonedit-input" disabled />
              </div>
            </div>
            <div className="edit-mode-button">
              <button onClick={fetchUserName} type="submit">Save</button>
              <button onClick={handleEdit}>cancel</button>
            </div>
          </form>
        ) : (
      <div className="header">
        <h1>Welcome back<br />{firstName + " " + lastName}</h1>
        <button className="edit-button" onClick={handleEdit}>Edit Name</button>
      </div>
        )}
      <h2 className="sr-only">Accounts</h2>
      <Account 
      state={{
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description:"Available Balance"
      }}/>
      <Account 
      state={{
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description:"Available Balance"
      }}/>
      <Account 
      state={{
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description:"Current Balancee"
      }}/>
    </main>
  );
};

export default User;