import React from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardLeft = () => {
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName +
    " " +
    loggedInUser?.basicInfo?.lastName;
  return (
    <div className="">
      <div className="py-10 px-2">
        <div>
          <Link to="/">
            <img
              src="https://i.ibb.co/HH8z5Cv/Screenshot-2023-05-27-145213-removebg-preview.png"
              alt=""
              className="w-2/3 mx-auto"
            />
          </Link>
        </div>
        <div className="mb-16">
          <div className="mt-16">
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/Y0K4W9f/dashboard-2.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Dashboard</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/9q0gqLy/group-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">All Users</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/VB6vMNZ/web-content.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">All Posts</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/4NzJXFy/request.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Admin Requests</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/2YJKmJj/warning-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Reported Posts</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/Jd44Yf4/warning-4.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Reported Comments</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/k8QDS68/warning-3.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Reported Users</p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaAngleRight></FaAngleRight>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-white absolute bottom-0 left-0 w-full dropdown dropdown-top dropdown-end">
          <label tabIndex={0} className="">
            <div className="2xl:p-4 lg:p-2 flex items-center justify-between">
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      loading="lazy"
                      draggable={false}
                      src={loggedInUser?.basicInfo?.profilePicture}
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-left ml-2">
                  <h2 className="font-medium text-sm">
                    {userFullName.toString()}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    Creator of Mini Verse
                  </p>
                </div>
              </div>
              <div>
                <button className="btn btn-xs">
                  <FaAngleUp className=""></FaAngleUp>
                </button>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
          >
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/gmgtqjm/setting.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Settings</p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/9HN4m7D/customer-support-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Help</p>
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  draggable={false}
                  src="https://i.ibb.co/X33zMfq/exit-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Log Out</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
