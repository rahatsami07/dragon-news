import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="font-bold text-3xl text-center mt-5">
          Login Your Account
        </h2>
        <div className="divider"></div>
        <div className="card-body">
          <fieldset className="fieldset w-full">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center ">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
