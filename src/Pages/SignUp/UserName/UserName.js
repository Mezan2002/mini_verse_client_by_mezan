import React from "react";
import { useForm } from "react-hook-form";

const UserName = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

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
            User Name
          </h2>
          <div className="px-10">
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="please select an unique user name"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
                {errors.firstName && (
                  <span className="text-red-500">User Name is required</span>
                )}
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

export default UserName;
