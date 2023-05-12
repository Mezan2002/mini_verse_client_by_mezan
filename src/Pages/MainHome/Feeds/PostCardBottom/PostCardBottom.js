import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CommentCard from "../CommentCard/CommentCard";

const PostCardBottom = ({ post, refetch, usersData }) => {
  console.log(post);
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName + loggedInUser?.basicInfo?.lastName;
  const [liked, setLiked] = useState(true);
  const likedBy = post?.postLikedBy;
  const commentInputRef = useRef(null);
  const newLikedUserCode = parseInt(loggedInUser?.userCode);
  const isUserOnLikedBy = likedBy?.includes(newLikedUserCode);
  const handleLike = (post) => {
    if (!isUserOnLikedBy) {
      post.postLikedBy = [...post.postLikedBy, newLikedUserCode];
    } else {
      post.postLikedBy = likedBy.filter((code) => code !== newLikedUserCode);
    }
    const likedData = { postLikedBy: post.postLikedBy };
    fetch(`https://miniverse-server.vercel.app/liked/${post._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // console.log(data);
        }
      })
      .catch((e) => console.log(e));
  };
  const handleComment = () => {
    commentInputRef.current.focus();
  };
  const handleSubmitComment = (event) => {
    event.preventDefault();
    const commentId = Math.floor(Math.random() * 100000) + 1;
    const form = event.target;
    const comment = form.comment.value;
    const commentedBy = {
      userFullName,
      userProfilePic: loggedInUser?.basicInfo?.profilePicture,
    };
    const replyComments = [];
    const postedComment = {
      comment,
      commentedBy,
      commentId,
      replyComments,
      commentedAt: new Date(),
    };
    fetch(`https://miniverse-server.vercel.app/postComment/${post._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postedComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          form.reset();
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="px-4 pt-4 pb-2 2xl:p-5">
        <div className="mb-5 2xl:mb-0">
          {post?.postLikedBy?.length >= 1 ? (
            <div className="flex items-center">
              <img
                draggable={false}
                className="mr-2 w-5 ml-2"
                src="https://i.ibb.co/5RFyxB7/heart.png"
                alt=""
              />
              <p className="">{post?.postLikedBy?.length} peoples loved</p>
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
                  isUserOnLikedBy
                    ? `${"https://i.ibb.co/5RFyxB7/heart.png"}`
                    : `${"https://i.ibb.co/9hQQvvX/love.png"}`
                } `}
                alt=""
                className="w-6 mr-4"
              />
              <h2
                className={`"text-lg" ${
                  isUserOnLikedBy ? " text-red-500 font-medium" : "text-black"
                }`}
              >
                {isUserOnLikedBy ? "Loved" : "Love"}
              </h2>
            </div>
          </div>
          <label
            onClick={handleComment}
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
        {post.comments.map((comment, i) => (
          <CommentCard
            comment={comment}
            post={post}
            postId={post._id}
            key={i}
            refetch={refetch}
          ></CommentCard>
        ))}
        <div className="flex items-center">
          <div className="avatar mr-3">
            <div className="w-10 rounded-full">
              <img
                draggable={false}
                src={
                  usersData
                    ? usersData?.basicInfo?.profilePicture
                    : loggedInUser?.basicInfo?.profilePicture
                }
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <form onSubmit={handleSubmitComment} className="w-full">
            <div className="flex items-center mb-5 relative">
              <input
                ref={commentInputRef}
                type="text"
                name="comment"
                required
                placeholder="Write a Comment..."
                className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-5 pr-12
                  focus:outline-none"
              />
              <button type="submit" className="absolute top-1/2 right-4">
                {" "}
                <img
                  className="w-4"
                  src="https://i.ibb.co/MsSxMrG/send-message.png"
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCardBottom;
