import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import SignIn from "../pages/SignIn.js";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </div>
  );
};

export default Router;