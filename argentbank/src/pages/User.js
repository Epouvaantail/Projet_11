import React from "react";
import Account from "../components/account";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../redux/store";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.grabToken);
  console.log(token);
  const [username, setUsername] = useState("");

  async function fetchDataSubmit() {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
    });
    const dataresponse = await response.json()
    let firstName = await dataresponse.body.firstName
    let lastName = await dataresponse.body.lastName
    let userName = await dataresponse.body.userName
    const fisrtLastName = firstName + ' ' + lastName;
    dispatch(saveProfile({fisrtLastName}));
    setUsername(fisrtLastName)
  }
  fetchDataSubmit()
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{username}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
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