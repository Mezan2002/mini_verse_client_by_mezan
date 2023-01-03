import React from "react";

const LeftSideMenu = () => {
  return (
    <div className="">
      <div className="px-5">
        <div>
          <div className="card bg-white shadow-xl mb-5">
            <div className="p-5 flex items-center">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="ml-5">
                <h2 className="">Mezanur Rahman</h2>
                <p className="text-gray-500">@mezan2002</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu card bg-white shadow-xl mb-5 w-full rounded-box">
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/s5RsSD2/house.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Home</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/DWvktnB/facebook-1.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Watch</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/yS32nXX/people.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Groups</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/0Z8mLb5/facebook-page.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Pages</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/yf2RjzH/save-instagram.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Saved</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/Yjm6Xqk/line-chart.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Analytics</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/KG4htTv/console.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Gaming</p>
          </div>
          <div className="flex items-center hover:bg-gray-200 p-5 m-2 rounded-2xl">
            <img
              src="https://i.ibb.co/VqQJKL3/settings.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
