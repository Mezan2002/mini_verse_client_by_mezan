import React from "react";
import {
  MdCheck,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const LinkSocialMedia = ({ stepNext, stepPrevious, register }) => {
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
          <h2 className="text-2xl font-medium capitalize text-center my-10">
            Link Social Media
          </h2>
          <div className="px-10">
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Facebook (Optional)</span>
                </label>
                <input
                  {...register("facebook")}
                  type="text"
                  placeholder="Facebook profile link"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Instagram (Optional)</span>
                </label>
                <input
                  {...register("instagram")}
                  type="text"
                  placeholder="Instagram profile link"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">GitHub (Optional)</span>
                </label>
                <input
                  {...register("github")}
                  type="text"
                  placeholder="GitHub profile link"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
              </div>
            </div>
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Linked In (Optional)</span>
                </label>
                <input
                  {...register("linkedin")}
                  type="text"
                  placeholder="Linked In profile link"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button onClick={stepPrevious} className="btn w-full my-5">
                <MdKeyboardArrowLeft className="text-xl"></MdKeyboardArrowLeft>{" "}
                Previous
              </button>
              <button type="submit" className="btn w-full my-5">
                Sign Up <MdCheck className="text-xl ml-2"></MdCheck>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSocialMedia;
