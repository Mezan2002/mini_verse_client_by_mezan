import React from "react";
import {
  FaSearch,
  FaFacebookMessenger,
  FaBell,
  FaAngleDown,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between px-10 sticky top-0 z-50 bg-white">
      <div className="navbar hidden lg:flex justify-center">
        <div className="navbar-start">
          <a
            className="btn btn-ghost hover:bg-[#fcfcfc] px-0 normal-case text-xl"
            href="/"
          >
            Mini <span className="text-primary">Verse</span>
          </a>
        </div>
        <div className="navbar justify-center">
          <div className="form-control">
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered w-[700px] mx-auto"
              />
              <span>
                <FaSearch></FaSearch>
              </span>
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-200">
            <span>
              <FaFacebookMessenger className="text-2xl"></FaFacebookMessenger>
            </span>
          </div>
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-200 mx-5">
            <span>
              <FaBell className="text-2xl"></FaBell>
            </span>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <div className="avatar relative">
                <div className="w-11 rounded-full">
                  <img
                    src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                    alt=""
                  />
                </div>
                <span
                  className="absolute bottom-[-2px] right-0 w-4 h-4 rounded-full bg-gray-200 flex 
            justify-center items-center"
                >
                  <FaAngleDown className="text-base"></FaAngleDown>
                </span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-md bg-base-100 rounded-box w-[400px]"
            >
              <div className="hover:bg-gray-200 card mt-4">
                <div className="p-5 rounded">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <h2 className="text-xl font-medium ml-2">Mezanur Rahman</h2>
                  </div>
                </div>
              </div>
              <div className="divider px-2"></div>
              <div className="mt-5">
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl">
                  <img
                    src="https://i.ibb.co/VqQJKL3/settings.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Setting & Privacy</p>
                </div>
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl">
                  <img
                    src="https://i.ibb.co/2yhFqKx/customer-support.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Help & Support</p>
                </div>
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl">
                  <img
                    src="https://i.ibb.co/hBTcVCF/feedback.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Give Feedback</p>
                </div>
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl">
                  <img
                    src="https://i.ibb.co/xJ3rwrH/logout-1.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Logout</p>
                </div>
              </div>
              <p className="text-sm text-center mt-5">
                Copyright © 2023 - All right reserved by Mezanur Rahman
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
