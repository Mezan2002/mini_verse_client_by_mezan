import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../Redux/ActionCreator/ActionCreator";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ loggedInUser }) => {
  const userFullName =
    loggedInUser?.basicInfo?.firstName +
    " " +
    loggedInUser?.basicInfo?.lastName;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/logIn");
  };
  return (
    <div className="flex justify-between px-10 sticky top-0 z-50 bg-white">
      <div className="navbar hidden lg:flex justify-center">
        <div className="navbar-start" title="Mini Verse Home">
          <Link to="/">
            <img
              loading="lazy"
              draggable={false}
              src="https://i.ibb.co/gDvcnWH/Screenshot-2023-03-22-022259.png"
              alt="miniVerseLogo"
              className="h-16 p-2"
            />
          </Link>
        </div>
        <div className="navbar justify-center">
          <div className="">
            <label className="relative w-full">
              <input
                type="text"
                placeholder="Search Here"
                className="py-3 pl-5 pr-14 2xl:w-[800px] border-gray-400 rounded-full  xl:w-[550px] mx-auto 
                focus:outline-none border"
              />
              <span>
                <img
                  loading="lazy"
                  draggable={false}
                  className="absolute right-5 top-[24%] w-6"
                  src="https://i.ibb.co/hYwBRBJ/search-interface-symbol.png"
                  alt=""
                />
              </span>
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-200">
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,
                1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,
                .25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
              </svg>
            </label>
          </div>
          <div className="w-11 flex justify-center items-center h-11 rounded-full bg-gray-200 mx-5">
            <img
              loading="lazy"
              src="https://i.ibb.co/vxTxZx5/notification.png"
              className="w-7"
              alt=""
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <div className="avatar relative">
                <div className="w-11 rounded-full">
                  <img
                    loading="lazy"
                    draggable={false}
                    src={loggedInUser?.basicInfo?.profilePicture}
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
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px]"
            >
              <Link to={`/usersProfile/${loggedInUser?._id}`}>
                <div className="hover:bg-gray-200 card mt-4">
                  <div className="p-5 rounded">
                    <div className="flex items-center">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            loading="lazy"
                            draggable={false}
                            src={loggedInUser?.basicInfo?.profilePicture}
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="text-xl font-medium ml-2">
                        {userFullName.toString()}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="divider px-2"></div>
              <div className="mt-5">
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl cursor-pointer">
                  <img
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/VqQJKL3/settings.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Setting & Privacy</p>
                </div>
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl cursor-pointer">
                  <img
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/2yhFqKx/customer-support.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Help & Support</p>
                </div>
                <div className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl cursor-pointer">
                  <img
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/hBTcVCF/feedback.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Give Feedback</p>
                </div>
                <div
                  onClick={handleLogOut}
                  className="flex items-center hover:bg-gray-200 p-4 m-2 rounded-2xl cursor-pointer"
                >
                  <img
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/xJ3rwrH/logout-1.png"
                    alt=""
                    className="w-6 mr-5"
                  />

                  <p>Logout</p>
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
