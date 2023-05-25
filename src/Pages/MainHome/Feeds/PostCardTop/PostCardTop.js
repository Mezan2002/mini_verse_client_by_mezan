import React from "react";
import useTimer from "../../../../Hooks/useTimer/useTimer";

const PostCardTop = ({ post }) => {
  const timerOfCreated = post?.postedAt;
  const isLong = true;
  const { timer } = useTimer({ timerOfCreated, isLong });
  return (
    <div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              loading="lazy"
              draggable={false}
              src={post?.postedBy?.profilePicture}
              alt=""
            />
          </div>
        </div>
        <div className="ml-4">
          <h5 className="font-semibold">{post?.postedBy?.userFullName}</h5>
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-gray-500">{post?.postedBy?.usersCountry},</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500 ml-1">{timer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardTop;
