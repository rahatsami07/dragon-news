import React from "react";
import { NavLink } from "react-router-dom";
import userImg from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex items-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={userImg} alt="" />
        <button className="btn btn-primary px-5 py-2">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
