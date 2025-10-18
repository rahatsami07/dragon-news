import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/auth/login" className="btn btn-primary px-5 py-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
