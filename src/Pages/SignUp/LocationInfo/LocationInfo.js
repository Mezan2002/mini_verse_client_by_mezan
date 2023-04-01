import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const LocationInfo = ({
  stepNext,
  stepPrevious,
  register,
  errors,
  formState,
}) => {
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
            <li data-content="4" className="step step-neutral">
              Location Info
            </li>
            <li data-content="5" className="step">
              Working Info
            </li>
            <li data-content="6" className="step">
              Link Social Media
            </li>
          </ul>
        </div>
        {/* Steps End  */}
        <div className="flex items-center justify-center min-h-[90vh]">
          <div className="border lg:w-6/12 2xl:w-4/12 xl:w-5/12 rounded-xl">
            <h2 className="text-2xl font-medium capitalize text-center my-10">
              Location Info
            </h2>
            <div className="px-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full mr-2">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    {...register("country", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.country && (
                    <span className="text-red-500">Country is required</span>
                  )}
                </div>
                <div className="form-control w-full mr-2">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.city && (
                    <span className="text-red-500">City is required</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full mr-2">
                  <label className="label">
                    <span className="label-text">State / Division</span>
                  </label>
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.state && (
                    <span className="text-red-500">
                      State / Division is required
                    </span>
                  )}
                </div>
                <div className="form-control w-full mr-2">
                  <label className="label">
                    <span className="label-text">Zip Code</span>
                  </label>
                  <input
                    {...register("zipCode", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.zipCode && (
                    <span className="text-red-500">Zip Code is required</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full mr-2">
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
                <div className="form-control w-full mr-2">
                  <label className="label">
                    <span className="label-text">Street Adress</span>
                  </label>
                  <input
                    {...register("street", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border py-3 rounded-xl focus:outline-none px-3"
                  />
                  {errors.street && (
                    <span className="text-red-500">
                      Street Adress is required
                    </span>
                  )}
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
    </div>
  );
};

export default LocationInfo;
