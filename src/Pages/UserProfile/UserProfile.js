import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewPost from "../MainHome/Feeds/NewPost/NewPost";
import PostCardBottom from "../MainHome/Feeds/PostCardBottom/PostCardBottom";
import PostCardTop from "../MainHome/Feeds/PostCardTop/PostCardTop";
import PostCardDropDown from "../MainHome/Feeds/PostCardDropDown/PostCardDropDown";
import { useQuery } from "@tanstack/react-query";
import EditPostModal from "../MainHome/EditPostModal/EditPostModal";

const UserProfile = () => {
  const usersData = useLoaderData();
  const [modalToggle, setModalToggle] = useState(true);
  const [postData, setPostData] = useState([]);
  const [editModalToggle, setEditModalToggle] = useState(true);
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["userPosts", usersData?.userCode],
    queryFn: async () => {
      const res = await fetch(
        `https://miniverse-server.vercel.app/userPosts/${usersData?.userCode}`
      );
      const data = await res.json();
      return data;
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="shadow-md">
        {/* cover photo start */}
        <div className="">
          <img
            src={usersData?.basicInfo?.coverPhoto}
            alt=""
            className="h-[450px] object-cover w-full"
          />
        </div>
        {/* cover photo end */}
        <div className="flex items-end justify-between 2xl:px-32 lg:px-20 w-full">
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
                <h2 className="font-semibold">0 followers </h2>
                <span className="mx-2">•</span>
                <h2 className="font-semibold">0 following</h2>
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
        <div className="divider 2xl:px-32 px-20  mb-0"></div>
        <div className="2xl:px-32 px-20  flex items-center justify-between">
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
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-5 gap-5 2xl:px-32 lg:px-20 mt-10">
        <div className="lg:col-span-2 2xl:col-span-1 relative">
          <div className="sticky top-28">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Introduction</h2>
                <p className="pb-20">
                  Hello There I am {""}
                  {usersData?.basicInfo?.firstName +
                    " " +
                    usersData?.basicInfo?.lastName}
                </p>
                <button className="btn btn-primary">Edit Bio</button>
              </div>
              <div className="px-5 py-4">
                <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                  <img
                    draggable={false}
                    src="https://i.ibb.co/jVHfdWL/home.png"
                    alt=""
                    className="w-5 mr-4"
                  />
                  <p className="">
                    Lives in {usersData?.locationInfo?.country}
                  </p>
                </div>
                <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                  <img
                    draggable={false}
                    src="https://i.ibb.co/zntghJX/location-1.png"
                    alt=""
                    className="w-5 mr-4"
                  />
                  <p className="">From {usersData?.locationInfo?.city} City</p>
                </div>
                {usersData?.workingInfo?.comapany && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/PzkLgtP/briefcase.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <p className="">
                      {usersData?.workingInfo?.position} at{" "}
                      {usersData?.workingInfo?.comapany}
                    </p>
                  </div>
                )}
                <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                  <img
                    draggable={false}
                    src="https://i.ibb.co/sWdGqcw/clock-2.png"
                    alt=""
                    className="w-5 mr-4"
                  />
                  <p className="">Joined {usersData?.joinedAt}</p>
                </div>
                {usersData?.socialMedia?.website && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/cwmS1L2/click.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                      href={`https://${usersData?.socialMedia?.website}`}
                    >
                      {usersData?.socialMedia?.website}
                    </a>
                  </div>
                )}
                {usersData?.socialMedia?.github && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/tqZfSnk/github-2.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <a
                      className="text-primary"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://gitHub.com/${usersData?.socialMedia?.github}`}
                    >
                      {usersData?.socialMedia?.github}
                    </a>
                  </div>
                )}
                {usersData?.socialMedia?.instagram && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/m4W8WPR/instagram.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <a
                      className="text-primary"
                      href={`https://www.instagram.com/${usersData?.socialMedia?.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {usersData?.socialMedia?.instagram}
                    </a>
                  </div>
                )}
                {usersData?.socialMedia?.linkedin && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/qjDFzWs/linkedin-2.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <a
                      className="text-primary"
                      href={`https://www.linkedin.com/in/${usersData?.socialMedia?.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {usersData?.socialMedia?.linkedin}
                    </a>
                  </div>
                )}
                {usersData?.socialMedia?.facebook && (
                  <div className="flex items-center hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                    <img
                      draggable={false}
                      src="https://i.ibb.co/PmJY5z3/facebook-2.png"
                      alt=""
                      className="w-5 mr-4"
                    />
                    <a
                      className="text-primary"
                      href={`https://web.facebook.com/${usersData?.socialMedia?.facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {usersData?.socialMedia?.facebook}
                    </a>
                  </div>
                )}
                <button className="btn btn-block mt-10 btn-primary">
                  Edit Details
                </button>
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
                    <div className="">
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                        alt=""
                      />
                      <p className="text-sm font-semibold">Mezanur Rahman</p>
                    </div>
                    <div>
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                        alt=""
                      />
                      <p className="text-sm font-semibold">Mezanur Rahman</p>
                    </div>
                    <div>
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/Cv05hL1/Default-isometric-view-of-a-MINI-cute-hyperrealistic-futuristi-1-2e5b52d0-fe21-48e9-b155-69086913003.jpg"
                        alt=""
                      />
                      <p className="text-sm font-semibold">Mezanur Rahman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-2 lg:col-span-3">
          <div>
            <NewPost
              usersData={usersData}
              modalToggle={modalToggle}
              setModalToggle={setModalToggle}
              refetch={refetch}
            ></NewPost>
          </div>
          <div>
            {/* posts section start */}
            {/* single post card start */}
            {posts.length ? (
              <>
                {posts?.map((post) => (
                  <div key={post._id} className="card mt-5 bg-white shadow">
                    <div className="flex justify-between px-5 pt-5 pb-3">
                      {/* post card top start */}

                      <PostCardTop post={post}></PostCardTop>

                      {/* post card top end */}
                      <div>
                        {/* post card dropdown start */}

                        <PostCardDropDown
                          usersData={usersData}
                          post={post}
                          refetch={refetch}
                          setPostData={setPostData}
                          setEditModalToggle={setEditModalToggle}
                        ></PostCardDropDown>

                        {/* post card dropdown end */}
                      </div>
                    </div>
                    <div className="py-2">
                      {post.postedImage && post.postedText ? (
                        <h2 className="2xl:pl-8 px-4 text-lg mb-5">
                          {" "}
                          {post?.postedText.length > 150
                            ? post?.postedText.slice(0, 150) + "..."
                            : post?.postedText}
                        </h2>
                      ) : (
                        <h2 className="pl-6 mb-5 text-4xl">
                          {post?.postedText}
                        </h2>
                      )}
                    </div>
                    {post.postedImage && (
                      <figure>
                        <img
                          draggable={false}
                          src={post?.postedImage}
                          alt={`${post.postedText}`}
                          className="2xl:max-h-[700px] 2xl:max-w-[800px] rounded-xl lg:max-w-[500px] lg:max-h-[500px]"
                        />
                      </figure>
                    )}

                    {/* post card bottom start */}

                    <PostCardBottom
                      usersData={usersData}
                      post={post}
                      refetch={refetch}
                    ></PostCardBottom>

                    {/* post card bottom end */}
                  </div>
                ))}
              </>
            ) : (
              <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-red-400">
                  No Post Founded!
                </h2>
              </div>
            )}
            {/* edit post modal start */}

            <EditPostModal
              refetch={refetch}
              postData={postData}
              editModalToggle={editModalToggle}
              setEditModalToggle={setEditModalToggle}
            ></EditPostModal>

            {/* edit post modal end */}
            {/* single post card end */}
            {/* posts section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
