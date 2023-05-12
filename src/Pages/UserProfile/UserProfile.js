import React from "react";
import { useLoaderData } from "react-router-dom";

const UserProfile = () => {
  const usersData = useLoaderData();
  console.log(usersData);
  return (
    <div className="shadow-md">
      {/* cover photo start */}
      <div className="">
        <img
          src="https://i.ibb.co/92rZXY5/minimal-dark-coding-wallpaper.png"
          alt=""
          className="h-[450px] object-cover w-full"
        />
      </div>
      {/* cover photo end */}
      <div className="flex items-end justify-between px-32 w-full">
        <div className="relative flex items-end gap-x-5 mt-[-60px]">
          <div className="avatar ">
            {" "}
            <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={usersData?.basicInfo?.profilePicture}
                alt="user_profile_photo"
                className=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-black text-3xl font-semibold">
              {usersData?.basicInfo?.firstName + usersData?.basicInfo?.lastName}
            </h1>
            <div className="flex items-center">
              <h2>1.6K followers </h2>
              <span className="mx-2">•</span>
              <h2>2K following</h2>
            </div>
            <div>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={usersData?.basicInfo?.profilePicture} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <button className="btn btn-primary font-semibold flex items-center justify-center">
            {" "}
            <img
              src="https://i.ibb.co/q7L21YS/edit-5.png"
              alt=""
              className="w-5 mr-2"
            />{" "}
            <span> Edit Profile</span>
          </button>
          <button className="btn flex items-center justify-center font-semibold">
            <img
              src="https://i.ibb.co/XXh8f6b/megaphone-1.png"
              alt=""
              className="w-6 mr-2"
            />{" "}
            <span>Advertise</span>
          </button>
          <button className="btn flex items-center justify-center font-semibold">
            {" "}
            <img
              src="https://i.ibb.co/cXW1WzD/setting-2.png"
              alt=""
              className="w-6 mr-2"
            />{" "}
            <span> More settings</span>
          </button>
        </div>
      </div>
      <div className="divider px-32 mb-0"></div>
      <div className="px-32 flex items-center justify-between">
        <div className="tabs gap-x-5">
          <a className="tab text-lg w-24 h-16 hover:bg-slate-200 tab-bordered tab-active">
            Posts
          </a>
          <a className="tab text-lg w-24 h-16 hover:bg-slate-200">About</a>
          <a className="tab text-lg w-24 h-16 hover:bg-slate-200 ">Photos</a>
          <a className="tab text-lg w-24 h-16 hover:bg-slate-200 ">More</a>
        </div>
        <div>
          <button className="btn btn-sm h-10">
            <img
              src="https://i.ibb.co/cLr7xKW/more.png"
              alt=""
              className="w-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
