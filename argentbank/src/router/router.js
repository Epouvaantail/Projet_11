import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import SignIn from "../pages/SignIn.js";
import User from "../pages/User.js";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // récuperation du token dans le localStorage
  const token = localStorage.getItem("token");
  // si il n'y a pas de token enregistré (pas d'utilisateur connecté)
  if (!token) {
    // renvoie à la page d'accueil
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
        {/* route protégée, afin que si personne est connécté on ne puisse pas avoir accès à la page profile */}
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