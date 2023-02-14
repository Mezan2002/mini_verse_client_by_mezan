import React from "react";

const PostCardTop = ({ post }) => {
  let currentTime = new Date();
  let presentTime =
    currentTime.getHours() +
    ":" +
    currentTime.getMinutes() +
    ":" +
    currentTime.getSeconds();
  return (
    <div>
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
            Bangladesh, {parseInt(presentTime) - parseInt(post?.postedTime)}{" "}
            hours ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCardTop;
