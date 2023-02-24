import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const date = data.date;
    const month = data.month;
    const year = data.year;
    const dateOfBirth = { date, month, year };
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border w-4/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="grid grid-cols-2 gap-1">
            <div className="form-control w-full mr-2">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                className="w-full border py-3 rounded-xl focus:outline-none px-3"
              />
              {errors.firstName && (
                <span className="text-red-500">First Name is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                className="w-full border py-3 rounded-xl focus:outline-none px-3"
              />
              {errors.lastName && (
                <span className="text-red-500">Last Name is required</span>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("phoneNumber", { required: true })}
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">Phone Number is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              {...register("newPassword", { required: true })}
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.newPassword && (
              <span className="text-red-500">New Password is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <div className="grid grid-cols-3 gap-5">
              <div>
                {errors.date ? (
                  <select
                    {...register("date", { required: true })}
                    className="select select-bordered focus:outline-none w-full border-red-500"
                  >
                    <option value={""}>Date</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                ) : (
                  <select
                    {...register("date", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Date</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                )}
                {errors.date && (
                  <span className="text-red-500">Date is required</span>
                )}
              </div>
              <div>
                {errors.month ? (
                  <select
                    {...register("month", { required: true })}
                    className="select select-bordered focus:outline-none w-full border-red-500"
                  >
                    <option value={""}>Month</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                ) : (
                  <select
                    {...register("month", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Month</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                )}
                {errors.month && (
                  <span className="text-red-500">Month is required</span>
                )}
              </div>
              <div>
                {errors.year ? (
                  <select
                    {...register("year", { required: true })}
                    className="select select-bordered focus:outline-none w-full border-red-500"
                  >
                    <option value={""}>Year</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                ) : (
                  <select
                    {...register("year", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Year</option>
                  </select>
                )}
                {errors.year && (
                  <span className="text-red-500">Year is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="grid grid-cols-3 gap-5">
              {errors.gender ? (
                <label
                  className="label cursor-pointer border border-red-500 rounded-xl flex items-center 
                  justify-between p-2"
                >
                  <span className="label-text mr-2 font-medium">Male</span>
                  <input
                    type="radio"
                    className="radio"
                    value={"male"}
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                </label>
              ) : (
                <label
                  className="label cursor-pointer border rounded-xl flex items-center justify-between
               p-2"
                >
                  <span className="label-text mr-2 font-medium">Male</span>
                  <input
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                    type="radio"
                    className="radio"
                    value="male"
                  />
                </label>
              )}
              {errors.gender ? (
                <label
                  className="label cursor-pointer border rounded-xl flex items-center 
                justify-between border-red-500 p-2"
                >
                  <span className="label-text mr-2 font-medium">Female</span>
                  <input
                    type="radio"
                    className="radio"
                    value="female"
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                </label>
              ) : (
                <label
                  className="label cursor-pointer border rounded-xl flex items-center 
                justify-between p-2"
                >
                  <span className="label-text mr-2 font-medium">Female</span>
                  <input
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                    type="radio"
                    className="radio"
                    value={"female"}
                  />
                </label>
              )}
              {errors.gender ? (
                <label
                  className="label cursor-pointer border border-red-500 rounded-xl flex items-center 
              justify-between p-2"
                >
                  <span className="label-text mr-2 font-medium">Other</span>
                  <input
                    type="radio"
                    className="radio"
                    value={"other"}
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                </label>
              ) : (
                <label
                  className="label cursor-pointer border rounded-xl flex items-center 
              justify-between p-2"
                >
                  <span className="label-text mr-2 font-medium">Other</span>
                  <input
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                    type="radio"
                    className="radio"
                    value={"other"}
                  />
                </label>
              )}
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
