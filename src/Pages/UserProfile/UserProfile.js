import React from "react";
import { useLoaderData } from "react-router-dom";
import NewPost from "../MainHome/Feeds/NewPost/NewPost";

const UserProfile = () => {
  const usersData = useLoaderData();
  console.log(usersData);
  return (
    <div>
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
          <div className="relative flex items-end gap-x-5 mt-[-70px]">
            <div className="avatar">
              {" "}
              <div className="w-56 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img
                  src={usersData?.basicInfo?.profilePicture}
                  alt="user_profile_photo"
                  className=""
                />
              </div>
            </div>
            <div>
              <h1 className="text-black text-3xl font-semibold">
                {usersData?.basicInfo?.firstName +
                  usersData?.basicInfo?.lastName}
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
            <a
              href="#home"
              className="tab text-lg w-24 h-16 hover:bg-slate-200 tab-bordered tab-active"
            >
              Posts
            </a>
            <a
              href="#home"
              className="tab text-lg w-24 h-16 hover:bg-slate-200"
            >
              About
            </a>
            <a
              href="#home"
              className="tab text-lg w-24 h-16 hover:bg-slate-200 "
            >
              Photos
            </a>
            <a
              href="#home"
              className="tab text-lg w-24 h-16 hover:bg-slate-200 "
            >
              More
            </a>
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
      <div className="grid grid-cols-3 gap-5 px-32 mt-10">
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Intro</h2>
              <p className="pb-20">
                আমি আল্লাহর এক অধম গুনাহগার বান্দা ছাড়া আর কিছুই নই।❤️❤️
              </p>
              <button className="btn btn-primary">Edit Bio</button>
            </div>
            <div className="card-body">
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/jVHfdWL/home.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">Lives in Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/zntghJX/location-1.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">From Rangpur City</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/PzkLgtP/briefcase.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">Frontend Developer @ Alter Learning</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/sWdGqcw/clock-2.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">Joined November 2017</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/cwmS1L2/click.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">mezanurrahman-portfolio.netlify.app</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/tqZfSnk/github-2.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">Mezan2002</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/m4W8WPR/instagram.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">mezaurrahman2002</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/qjDFzWs/linkedin-2.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">mezanurrahman2002</p>
              </div>
              <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <img
                  draggable={false}
                  src="https://i.ibb.co/PmJY5z3/facebook-2.png"
                  alt=""
                  className="w-5 mr-4"
                />
                <p className="">mezanurrahman2002</p>
              </div>
              <button className="btn btn-primary">Edit Details</button>
            </div>
          </div>
          <div className="my-5">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className=" flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Photos</h2>
                  <button className="btn-link">See All Photos</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className=" flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Friends</h2>
                  <button className="btn-link">See All Friends</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <NewPost></NewPost>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
