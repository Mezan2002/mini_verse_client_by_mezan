import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-black w-4/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Sign Up
        </h2>
        <form className="px-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">your first name</span>
            </label>
            <input
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">your last name</span>
            </label>
            <input
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">your email</span>
            </label>
            <input
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">your phone number</span>
            </label>
            <input
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">password</span>
            </label>
            <input
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">confirm password</span>
            </label>
            <input
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <button type="submit" className="btn btn-block my-5">
            Sign Up
          </button>
        </form>
        <div>
          <p className="text-center mb-5">
            already have an account?{" "}
            <Link to="/logIn" className="text-primary">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
