import React from "react";
import { useForm } from "react-hook-form";

const LinkSocialMedia = () => {
  const { register } = useForm();

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
            Link Social Media
          </h2>
          <div className="px-10">
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">Facebook</span>
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
                  <span className="label-text">Instagram</span>
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
                  <span className="label-text">GitHub</span>
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
                  <span className="label-text">Linked In</span>
                </label>
                <input
                  {...register("linkedin")}
                  type="text"
                  placeholder="Linked In profile link"
                  className="w-full border py-3 rounded-xl focus:outline-none px-3"
                />
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
  );
};

export default LinkSocialMedia;
