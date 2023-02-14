import React, { useState } from "react";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import PostModal from "../PostModal/PostModal";

const Feeds = ({ posts, refetch, isLoading }) => {
  const [modalToggle, setModalToggle] = useState(true);
  let currentTime = new Date();
  let presentTime =
    currentTime.getHours() +
    ":" +
    currentTime.getMinutes() +
    ":" +
    currentTime.getSeconds();
  return (
    <div className="">
      {/* feeds start */}
      {/* stories card start */}
      <div className="card  shadow-xl grid grid-cols-4 p-5 gap-3">
        {/* create story card start */}
        <div className="z-0">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative">
            <figure>
              <img
                src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                alt="Shoes"
                className="h-48"
              />
            </figure>
            <div className="py-3 text-center font-semibold">
              <p>Create Story</p>
            </div>
            <div className="bg-primary border-white border-2 absolute top-[71%] left-[38%] rounded-full text-white h-8 w-8 flex justify-center items-center">
              <span>
                <FaPlus className="text-lg"></FaPlus>
              </span>
            </div>
          </div>
        </div>
        {/* create story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
      </div>
      {/* stories card end */}
      {/* new post section start */}
      <div>
        <div className="card mt-5 rounded-full bg-white shadow-md">
          <div className="avatar absolute top-3 left-5">
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                alt=""
              />
            </div>
          </div>
          <label htmlFor="addPostModal" onClick={() => setModalToggle(true)}>
            <div className="p-4 flex items-center">
              <div className="ml-14 relative">
                <h2 className="text-lg text-gray-400">
                  What is your mind, Mezan?
                </h2>
              </div>
              <div className="rounded-full flex items-center justify-center h-10 w-24 text-white bg-primary absolute right-4">
                <h2>Post</h2>
              </div>
            </div>
          </label>
        </div>
        <PostModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          refetch={refetch}
        ></PostModal>
      </div>
      {/* new post section end */}
      {/* posts section start */}
      {/* single post card start */}
      {posts.map((post) => (
        <div key={post._id} className="card mt-5 bg-white shadow-xl">
          <div className="flex justify-between p-5">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="font-semibold">Mezanur Rahman</h5>
                <p className="text-gray-500">
                  Bangladesh,{" "}
                  {parseInt(presentTime) - parseInt(post?.postedTime)} hours ago
                </p>
              </div>
            </div>
            <div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="m-1">
                  <span>
                    <FaEllipsisH className="mr-2 text-xl"></FaEllipsisH>
                  </span>
                </label>
                {post.postedImage ? (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
                  >
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/yf2RjzH/save-instagram.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Save</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/7QZgZ5g/link.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Copy Link</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/qmDXmxW/document.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Hide post</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/R7GBGBB/warning.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Report this post</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/VNT4tRr/remove-user.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Unfollow Mezan</p>
                    </div>
                  </ul>
                ) : (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
                  >
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/yf2RjzH/save-instagram.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Save</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/qmDXmxW/document.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Hide post</p>
                    </div>
                    <div className="flex items-center hover:bg-gray-200 p-3 m-2 rounded-2xl">
                      <img
                        src="https://i.ibb.co/R7GBGBB/warning.png"
                        alt=""
                        className="w-6 mr-5"
                      />
                      <p className="">Report this post</p>
                    </div>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="py-2">
            {post.postedImage && post.postedText ? (
              <h2 className="pl-6 mb-5">{post?.postedText}</h2>
            ) : (
              <h2 className="pl-6 mb-5 text-4xl">{post?.postedText}</h2>
            )}
          </div>
          {post.postedImage && (
            <figure>
              <img
                src={post?.postedImage}
                alt={`${post.postedText}`}
                className="h-[700px] rounded-xl"
              />
            </figure>
          )}
          <div className="card-body">
            <div className="grid grid-cols-3 gap-5 border-y py-1">
              <div className="hover:bg-gray-200 text-center cursor-pointer py-2 rounded-md flex items-center justify-center">
                <img
                  src="https://i.ibb.co/bH4dk1w/like.png"
                  alt=""
                  className="w-6 mr-4"
                />
                <h2 className="text-lg">Like</h2>
              </div>
              <div className="hover:bg-gray-200 text-center py-2 cursor-pointer rounded-md flex items-center justify-center">
                <img
                  src="https://i.ibb.co/VLvSYSr/comment.png"
                  alt=""
                  className="w-6 mr-4"
                />
                <h2 className="text-lg">Comment</h2>
              </div>
              <div className="hover:bg-gray-200 text-center py-2 cursor-pointer rounded-md flex items-center justify-center">
                <img
                  src="https://i.ibb.co/R0Tw5Bt/share.png"
                  alt=""
                  className="w-6 mr-4"
                />
                <h2 className="text-lg">Share</h2>
              </div>
            </div>
            <div className="flex items-center">
              <div className="avatar mr-3">
                <div className="w-10 rounded-full">
                  <img
                    src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center mb-5">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-5
                  focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* single post card end */}
      {/* posts section end */}
      {/* feeds end */}
    </div>
  );
};

export default Feeds;
