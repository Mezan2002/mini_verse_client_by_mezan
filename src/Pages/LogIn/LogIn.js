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
              <span className="label-text">useremail or phone number</span>
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
          <div className="flex items-center justify-between mt-3">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox mr-2" />
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <p className="hover:underline text-primary">forgot password?</p>
          </div>
          <button type="submit" className="btn btn-block my-5">
            Login
          </button>
        </form>
        <div>
          <p className="text-center mb-5">
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
