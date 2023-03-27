import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getDateList,
  getMonthList,
  getYearList,
} from "../../../Functions/DateMakerFn";

const WorkingInfo = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

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
          <li data-content="✓" className="step step-neutral">
            Working Info
          </li>
          <li data-content="✓" className="step step-neutral">
            Link Social Media
          </li>
        </ul>
      </div>
      {/* Steps End  */}
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="border w-4/12 rounded-xl">
          <h2 className="text-2xl font-medium uppercase text-center my-10">
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
                  {...register("city", { required: true })}
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
            <div>
              <label className="label">
                <span className="label-text">From</span>
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
            <div className="flex justify-between">
              <button className="btn my-5">Previous</button>
              <button type="submit" className="btn my-5">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingInfo;
