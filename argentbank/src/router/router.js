import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import SignIn from "../pages/SignIn.js";
import User from "../pages/User.js";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/"/>
  }
  return children
};

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

export default Router;