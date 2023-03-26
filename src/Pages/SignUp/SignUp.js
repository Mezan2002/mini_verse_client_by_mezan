import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  getDateList,
  getMonthList,
  getYearList,
} from "../../Functions/DateMakerFn";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  fetchingError,
  fetchingStart,
  fetchingSuccessfull,
} from "../../Redux/ActionCreator/ActionCreator";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [acceptTerm, setAcceptTerm] = useState(false);

  // dates state start
  const [yearList, setYearList] = useState([]);
  const [monthList, setMonthList] = useState([]);
  const [dateList, setDateList] = useState([]);
  // dates state end

  useEffect(() => {
    const years = getYearList();
    const months = getMonthList();
    const dates = getDateList();

    setYearList(years);
    setMonthList(months);
    setDateList(dates);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      password: data.newPassword,
      dateOfBirth: { date: data.date, month: data.month, year: data.year },
      gender: data.gender,
      terms: data.terms,
    };
    dispatch(fetchingStart);
    fetch("http://localhost:5000/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          dispatch(fetchingSuccessfull(userData));
          localStorage.setItem("usersEmail", userData.email);
          Swal.fire("Sign Up Successfully!", "", "success");
          navigate("/");
        }
      })
      .catch((e) => dispatch(fetchingError));
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
                    {dateList.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    {...register("date", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Date</option>
                    {dateList.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
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
                    {monthList.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    {...register("month", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Month</option>
                    {monthList.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
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
                    {yearList.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    {...register("year", { required: true })}
                    className="select select-bordered focus:outline-none w-full"
                  >
                    <option value={""}>Year</option>
                    {yearList.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
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
          <div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center mt-5">
                <input
                  type="checkbox"
                  {...register("terms")}
                  onChange={(e) => setAcceptTerm(e.target.checked)}
                  className="checkbox mr-2"
                />
                <span className="label-text">Accept Terms & Conditions</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={!acceptTerm}
            className="btn btn-block my-5"
          >
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
