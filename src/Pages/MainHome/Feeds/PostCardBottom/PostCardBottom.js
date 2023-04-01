import React, { useState } from "react";

const PostCardBottom = ({ post, refetch }) => {
  const [liked, setLiked] = useState(true);
  const handleLike = (post) => {
    let likes = parseInt(post.likes);
    if (liked === true) {
      likes = parseInt(likes + 1);
    }
    const likedData = { likes };
    fetch(`http://localhost:5000/liked/${post._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((e) => console.log(e));
  };
  const handleComment = (post) => {
    console.log(post);
  };
  return (
    <div>
      <div className="px-4 pt-4 pb-2 2xl:p-5">
        <div className="mb-5 2xl:mb-0">
          {post.likes >= 1 ? (
            <div className="flex items-center">
              <img
                draggable={false}
                className="mr-2 w-5 ml-2"
                src="https://i.ibb.co/5RFyxB7/heart.png"
                alt=""
              />
              <p className="">{post.likes} peoples loved</p>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-3 gap-5 border-y py-1 mb-3 mt-5">
          <div className="" onClick={() => handleLike(post)}>
            <div
              className="hover:bg-gray-200 text-center cursor-pointer py-2 rounded-md flex 
          items-center justify-center"
              onClick={() => setLiked(!liked)}
            >
              <img
                draggable={false}
                src={`${
                  !liked
                    ? `${"https://i.ibb.co/5RFyxB7/heart.png"}`
                    : `${"https://i.ibb.co/9hQQvvX/love.png"}`
                } `}
                alt=""
                className="w-6 mr-4"
              />
              <h2
                className={`"text-lg" ${
                  liked ? "text-black" : " text-red-500 font-medium"
                }`}
              >
                {liked ? "Love" : "Loved"}
              </h2>
            </div>
          </div>
          <label
            onClick={() => handleComment(post)}
            htmlFor="comment"
            className="hover:bg-gray-200 text-center py-2 cursor-pointer rounded-md flex 
          items-center justify-center"
          >
            <img
              draggable={false}
              src="https://i.ibb.co/VLvSYSr/comment.png"
              alt=""
              className="w-6 mr-4"
            />
            <h2 className="text-lg">Comment</h2>
          </label>
          <div
            className="hover:bg-gray-200 text-center py-2 cursor-pointer rounded-md flex 
          items-center justify-center"
          >
            <img
              draggable={false}
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
                draggable={false}
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
