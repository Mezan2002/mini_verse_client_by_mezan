import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-black w-4/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Login
        </h2>
        <form className="px-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Adress or Phone Number</span>
            </label>
            <input
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <button type="submit" className="btn btn-block my-5">
            Login
          </button>
        </form>
        <div className="flex items-center justify-between px-10 mb-10">
          <p className="hover:underline text-primary">forgot account?</p>
          <p className="text-center">
            don't have an account?{" "}
            <Link to="/signUp" className="text-primary">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
