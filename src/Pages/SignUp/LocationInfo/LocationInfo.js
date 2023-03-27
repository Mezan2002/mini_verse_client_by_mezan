import React from "react";
import { useForm } from "react-hook-form";

const LocationInfo = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
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
              Location Info
            </h2>
            <div className="px-10">
              <div className="flex items-center">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">Country is required</span>
                  )}
                </div>
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">City is required</span>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">State / Division</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      State / Division is required
                    </span>
                  )}
                </div>
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Zip Code</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      Postal Code is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Hometown</span>
                  </label>
                  <input
                    {...register("hometown", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.hometown && (
                    <span className="text-red-500">Hometown is required</span>
                  )}
                </div>
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Street Adress</span>
                  </label>
                  <input
                    {...register("street", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      Street Adress is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <button className="btn my-5">Previous</button>
                <button type="submit" className="btn my-5">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
