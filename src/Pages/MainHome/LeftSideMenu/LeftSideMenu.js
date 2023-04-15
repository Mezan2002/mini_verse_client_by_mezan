import React from "react";
import { useSelector } from "react-redux";

const LeftSideMenu = () => {
  const loggedInUser = useSelector((state) => state?.loggedInUser[0]);
  const userFullName =
    loggedInUser?.basicInfo?.firstName + loggedInUser?.basicInfo?.lastName;
  return (
    <div className="fixed">
      <div className="px-5 ">
        <div className="menu p-4 card bg-white shadow 2xl:mb-5 mb-3 lg:w-10/12 2xl:w-full rounded-box">
          <div className="">
            <div className="hover:bg-gray-200 rounded-2xl">
              <div className="2xl:p-4 lg:p-2 flex items-center">
                <div className="avatar">
                  <div className="w-14 h-14 rounded-full">
                    <img
                      draggable={false}
                      src={loggedInUser?.basicInfo?.profilePicture}
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-5">
                  <h2 className="font-medium">{userFullName.toString()}</h2>
                  <p className="text-gray-500">
                    {" "}
                    @{loggedInUser?.basicInfo?.userName}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/s5RsSD2/house.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Home</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/DWvktnB/facebook-1.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Watch</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/yS32nXX/people.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Groups</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/0Z8mLb5/facebook-page.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Pages</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/yf2RjzH/save-instagram.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Saved</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/Yjm6Xqk/line-chart.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Analytics</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/KG4htTv/console.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Gaming</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
            <img
              draggable={false}
              src="https://i.ibb.co/VqQJKL3/settings.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Settings</p>
          </div>
          <p className="2xl:text-sm text-xs text-center 2xl:mt-16 lg:mt-12">
            Copyright © 2023 - All right reserved by Mezanur Rahman
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
