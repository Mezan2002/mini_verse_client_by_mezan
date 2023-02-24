import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-black w-4/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Adress or Phone Number</span>
            </label>
            <input
              {...register("emailOrPhone", { required: true })}
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.emailOrPhone && (
              <span className="text-red-500">
                Email or Phone Number is required
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
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
