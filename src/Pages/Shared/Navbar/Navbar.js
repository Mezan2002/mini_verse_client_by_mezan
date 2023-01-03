import React from "react";
import {
  FaSearch,
  FaFacebookMessenger,
  FaBell,
  FaAngleDown,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between px-10">
      <div className="navbar hidden lg:flex justify-center">
        <div className="navbar-start">
          <a
            className="btn btn-ghost hover:bg-base-200 px-0 normal-case text-xl"
            href="/"
          >
            Mini <span className="text-purple-500">Verse</span>
          </a>
        </div>
        <div className="navbar justify-center">
          <div className="form-control">
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="Search MiniVerse"
                className="input input-bordered w-[700px] mx-auto"
              />
              <span>
                <FaSearch></FaSearch>
              </span>
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-300">
            <span>
              <FaFacebookMessenger className="text-2xl"></FaFacebookMessenger>
            </span>
          </div>
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-300 mx-5">
            <span>
              <FaBell className="text-2xl"></FaBell>
            </span>
          </div>
          <div className="avatar relative">
            <div className="w-11 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
            <span
              className="absolute bottom-[-2px] right-0 w-4 h-4 rounded-full bg-gray-300 flex 
            justify-center items-center"
            >
              <FaAngleDown className="text-base"></FaAngleDown>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
