import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const PostCardDropDown = ({ post }) => {
  return (
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
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/JH0SJXc/edit-1.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Edit Post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/SBkdp91/delete-1.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Delete Post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/yf2RjzH/save-instagram.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Save</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/7QZgZ5g/link.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Copy Link</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/qmDXmxW/document.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Hide post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/R7GBGBB/warning.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Report this post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-3 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
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
            <div className="flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/JH0SJXc/edit-1.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Edit Post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/SBkdp91/delete-1.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Delete Post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/yf2RjzH/save-instagram.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Save</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/qmDXmxW/document.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Hide post</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-2xl">
              <img
                draggable={false}
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
  );
};

export default PostCardDropDown;
