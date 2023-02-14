import React from "react";

const PostCardBottom = () => {
  return (
    <div>
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
  );
};

export default PostCardBottom;
