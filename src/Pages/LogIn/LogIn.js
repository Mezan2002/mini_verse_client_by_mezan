import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { loadLoggedInUserData } from "../../Redux/Thunk/LoadLoggedInUserData/LoadLoggedInUserData";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/login?email=${data.email}&password=${data.password}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("randomNumber", parseInt(data.userCode));
        Swal.fire("Login Successfully!", "", "success");
        navigate("/");
        dispatch(loadLoggedInUserData());
      })
      .catch((err) => {
        Swal.fire(
          "Wrong Credential!",
          "Please try with correct email address and password.",
          "error"
        );
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border lg:w-6/12 2xl:w-4/12 xl:w-5/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Adress</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.email && (
              <span className="text-red-500">Email Adress is required</span>
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
