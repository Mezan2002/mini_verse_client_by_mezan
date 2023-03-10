import React, { useEffect, useState } from "react";

const PostCardTop = ({ post }) => {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const postDate = new Date(post.postedAt);
      const currentDate = new Date();

      const diffInMilliseconds = currentDate.getTime() - postDate.getTime();
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      const diffInMonths = Math.floor(diffInDays / 30);
      const diffInYears = Math.floor(diffInMonths / 12);
      let timePosition;
      if (diffInSeconds < 60) {
        timePosition = `${diffInSeconds} seconds ago`;
      } else if (diffInMinutes < 60) {
        timePosition = `${diffInMinutes} minutes ago`;
      } else if (diffInHours < 24) {
        timePosition = `${diffInHours} hours ago`;
      } else if (diffInDays < 30) {
        timePosition = `${diffInDays} days ago`;
      } else if (diffInMonths < 12) {
        timePosition = `${diffInMonths} months ago`;
      } else {
        timePosition = `${diffInYears} years ago`;
      }

      setTimer(timePosition);
    }, 1000);

    return () => clearInterval(timer);
  }, [post.postedAt]);

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
          <p className="text-gray-500">Bangladesh, {timer}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCardTop;
