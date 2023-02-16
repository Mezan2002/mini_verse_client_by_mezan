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
          <div className="flex items-center">
            <div className="form-control w-1/2 mr-2">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                className="w-full border py-3 rounded-xl focus:outline-none px-3"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                className="w-full border py-3 rounded-xl focus:outline-none px-3"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <select className="select select-bordered focus:outline-none w-full">
                  <option disabled selected>
                    Date
                  </option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered focus:outline-none w-full">
                  <option disabled selected>
                    Month
                  </option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered focus:outline-none w-full">
                  <option disabled selected>
                    Year
                  </option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="grid grid-cols-3 gap-5">
              <label
                className="label cursor-pointer border rounded-xl flex items-center justify-betwee n
               p-2"
              >
                <span className="label-text mr-2 font-medium">Male</span>
                <input type="radio" name="radio-10" className="radio " />
              </label>
              <label
                className="label cursor-pointer border rounded-xl flex items-center justify-between  
              p-2"
              >
                <span className="label-text mr-2 font-medium">Female</span>
                <input type="radio" name="radio-10" className="radio " />
              </label>
              <label
                className="label cursor-pointer border rounded-xl flex items-center justify-between  
              p-2"
              >
                <span className="label-text mr-2 font-medium">
                  Common Gender
                </span>
                <input type="radio" name="radio-10" className="radio " />
              </label>
            </div>
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
