import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-10 hidden lg:flex justify-center">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            mini <span className="text-purple-500">Verse</span>{" "}
          </a>
        </div>
        <div className="navbar">
          <input
            type="text"
            placeholder="Search Facebook"
            className="input input-bordered w-8/12 mx-auto px-10 rounded-full"
          />
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
