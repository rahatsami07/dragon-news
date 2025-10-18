import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-5">
        <h2 className="font-bold text-3xl text-center mt-5">
          Register Your Account
        </h2>
        <div className="divider"></div>
        <div className="card-body">
          <fieldset className="fieldset ">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Your Name"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
