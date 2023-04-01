import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const UserName = ({ stepNext, stepPrevious, register, errors, formState }) => {
  const [checkUserName, setCheckUserName] = useState("");
  const [isUserNameExist, setIsUserNameExist] = useState(false);
  const handleUserNameCheck = (e) => {
    setCheckUserName(e.target.value);
  };
  useEffect(() => {
    if (checkUserName !== "") {
      fetch(`http://localhost:5000/checkUserName/${checkUserName}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUserNameExist(data.isEmailExist);
        });
    }
  }, [checkUserName]);
  return (
    <div>
      {/* Steps Start */}
      <div className="flex justify-center items-center my-4">
        <ul className="steps">
          <li data-content="✓" className="step step-neutral">
            Sign Up Info
          </li>
          <li data-content="2" className="step step-neutral">
            User Name
          </li>
          <li data-content="3" className="step">
            Profile Picture
          </li>
          <li data-content="4" className="step">
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
            User Name
          </h2>
          <div className="px-10">
            <div className="">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <label htmlFor="" className="input-group">
                  <span className="text-xl">@</span>
                  <input
                    {...register("userName", { required: true })}
                    onChange={handleUserNameCheck}
                    type="text"
                    placeholder="example001"
                    className={`w-full border py-3 rounded-xl focus:outline-none px-3 ${
                      isUserNameExist ? "border-red-500" : null
                    }`}
                  />
                </label>
                {errors.userName && (
                  <span className="text-red-500">User Name is required</span>
                )}
                {isUserNameExist && (
                  <span className="text-red-500">
                    This username already have been taken!
                  </span>
                )}
                <label className="label">
                  <span className="label-text capitalize">
                    Please select an unique user name
                  </span>
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
                disabled={!formState.isValid || isUserNameExist}
                type="submit"
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

export default UserName;
