import React from "react";
import {
  FaArrowDown,
  FaChevronDown,
  FaEllipsisH,
  FaPlus,
  FaUserFriends,
} from "react-icons/fa";

const Feeds = () => {
  return (
    <div className="">
      {/* feeds start */}
      {/* stories card start */}
      <div className="card  shadow-xl grid grid-cols-4 p-5 gap-3">
        {/* create story card start */}
        <div className="z-0">
          <div className="card w-10/12 shadow-md relative">
            <figure>
              <img
                src="https://placeimg.com/192/192/people"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="py-5 text-center font-semibold">
              <p>Create Story</p>
            </div>
            <div className="bg-primary border border-white absolute top-[67%] left-[38%] rounded-full text-white h-10 w-10 flex justify-center items-center">
              <span>
                <FaPlus className="text-xl"></FaPlus>
              </span>
            </div>
          </div>
        </div>
        {/* create story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-10/12 shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
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
          <div className="card w-10/12 shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
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
          <div className="card w-10/12 shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
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
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <label htmlFor="addPostModal">
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
        <input type="checkbox" id="addPostModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="addPostModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-center">Create post</h3>
            <div className="divider"></div>
            <div>
              <div className="flex items-center mb-10">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="font-semibold">Mezanur Rahman</h5>
                  <button className="btn btn-xs">
                    <FaUserFriends className="mr-2"></FaUserFriends> Friends
                    <FaChevronDown className="ml-2"></FaChevronDown>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <textarea
                className="w-full h-40 focus:outline-none text-xl"
                placeholder="What's on your mind, Mezan?"
              ></textarea>
            </div>
            <div className="w-full rounded-xl h-16 border border-gray-200 p-5 flex items-center justify-between">
              <h3 className="text-lg font-medium">Add with your post</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* new post section end */}
      {/* posts section start */}
      {/* single post card start */}
      <div className="card mt-5 bg-white shadow-xl">
        <div className="flex justify-between p-5">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="ml-4">
              <h5 className="font-semibold">Mehedi Hasan</h5>
              <p className="text-gray-500">Bangladesh, 3 minutes ago</p>
            </div>
          </div>
          <div>
            <span>
              <FaEllipsisH className="mr-2 text-xl"></FaEllipsisH>
            </span>
          </div>
        </div>
        <div className="py-2">
          <h2 className="pl-6">Hello world this is test!</h2>
        </div>
        <figure>
          <img
            src="https://i.ibb.co/0cSs0nj/Penne-Marinara-Sauce-foodiecrush-com-004.jpg"
            alt="Shoes"
            className="h-[800px] rounded-xl"
          />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-3 gap-5">
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/bH4dk1w/like.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Like</h2>
            </div>
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/VLvSYSr/comment.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Comment</h2>
            </div>
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/R0Tw5Bt/share.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Share</h2>
            </div>
          </div>
        </div>
      </div>
      {/* single post card end */}
      {/* single post card start */}
      <div className="card mt-5 bg-white shadow-xl">
        <div className="flex justify-between p-5">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="ml-4">
              <h5 className="font-semibold">Mezanur Rahman</h5>
              <p className="text-gray-500">Bangladesh, 3 minutes ago</p>
            </div>
          </div>
          <div>
            <span>
              <FaEllipsisH className="mr-2 text-xl"></FaEllipsisH>
            </span>
          </div>
        </div>
        <div className="py-4">
          <h2 className="pl-6">Hello world this is test!</h2>
        </div>
        <figure>
          <img
            src="https://i.ibb.co/1R5VNF3/contact-form.jpg"
            alt="Shoes"
            className="h-[800px] rounded-xl"
          />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-3 gap-5">
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/bH4dk1w/like.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Like</h2>
            </div>
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/VLvSYSr/comment.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Comment</h2>
            </div>
            <div className="hover:bg-gray-200 text-center py-2 rounded-md flex items-center justify-center">
              <img
                src="https://i.ibb.co/R0Tw5Bt/share.png"
                alt=""
                className="w-6 mr-4"
              />
              <h2 className="text-lg">Share</h2>
            </div>
          </div>
        </div>
      </div>
      {/* single post card end */}
      {/* posts section end */}
      {/* feeds end */}
    </div>
  );
};

export default Feeds;
