import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  getDateList,
  getMonthList,
  getYearList,
} from "../../../Functions/DateMakerFn";

const WorkingInfo = ({
  stepNext,
  stepPrevious,
  register,
  errors,
  formState,
}) => {
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

  return (
    <div>
      {/* Steps Start */}
      <div className="flex justify-center items-center my-4">
        <ul className="steps">
          <li data-content="✓" className="step step-neutral">
            Sign Up Info
          </li>
          <li data-content="✓" className="step step-neutral">
            User Name
          </li>
          <li data-content="✓" className="step step-neutral">
            Profile Picture
          </li>
          <li data-content="✓" className="step step-neutral">
            Location Info
          </li>
          <li data-content="5" className="step step-neutral">
            Working Info
          </li>
          <li data-content="6" className="step">
            Link Social Media
          </li>
        </ul>
      </div>
      {/* Steps End  */}
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="border lg:w-6/12 2xl:w-4/12 xl:w-5/12 mb-5 rounded-xl">
          <h2 className="text-2xl font-medium capitalize text-center my-10">
            Working Info
          </h2>
          <div className="px-10">
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  {...register("comapany", { required: true })}
                  type="text"
                  placeholder=""
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
                {errors.comapany && (
                  <span className="text-red-500">
                    Comapany Name is required
                  </span>
                )}
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Position</span>
                </label>
                <input
                  {...register("position", { required: true })}
                  type="text"
                  placeholder=""
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
                {errors.position && (
                  <span className="text-red-500">Position is required</span>
                )}
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">City / Town</span>
                </label>
                <input
                  {...register("companyCity", { required: true })}
                  type="text"
                  placeholder=""
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
                {errors.city && (
                  <span className="text-red-500">City / Town is required</span>
                )}
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description")}
                  type="text"
                  placeholder=""
                  className="w-full h-32 border py-3 rounded-xl focus:outline-none px-3"
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">From</span>
              </label>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  {errors.startingDate ? (
                    <select
                      {...register("startingDate", { required: true })}
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
                      {...register("startingDate", { required: true })}
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
                  {errors.startingDate && (
                    <span className="text-red-500 text-sm">
                      Date is required
                    </span>
                  )}
                </div>
                <div>
                  {errors.startingMonth ? (
                    <select
                      {...register("startingMonth", { required: true })}
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
                      {...register("startingMonth", { required: true })}
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
                  {errors.startingMonth && (
                    <span className="text-red-500 text-sm">
                      Month is required
                    </span>
                  )}
                </div>
                <div>
                  {errors.startingYear ? (
                    <select
                      {...register("startingYear", { required: true })}
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
                      {...register("startingYear", { required: true })}
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
                  {errors.startingYear && (
                    <span className="text-red-500 text-sm">
                      Year is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="form-control">
                <label className="cursor-pointer flex items-center mt-5">
                  <input
                    type="checkbox"
                    {...register("working")}
                    className="checkbox mr-2"
                  />
                  <span className="label-text">I am still working here</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button onClick={stepPrevious} className="btn w-full my-5">
                <MdKeyboardArrowLeft className="text-xl"></MdKeyboardArrowLeft>{" "}
                Previous
              </button>
              <button
                onClick={stepNext}
                type="submit"
                disabled={!formState.isValid}
                className="btn w-full my-5"
              >
                Next{" "}
                <MdKeyboardArrowRight className="text-xl"></MdKeyboardArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingInfo;
