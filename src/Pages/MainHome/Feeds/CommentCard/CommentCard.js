import React, { useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";
import useTimer from "../../../../Hooks/useTimer/useTimer";
import ReplyCommentCard from "../ReplyCommentCard/ReplyCommentCard";
import Swal from "sweetalert2";

const CommentCard = ({ comment, refetch, postId, post, nestingLevel = 0 }) => {
  const [commentEditModalToggle, setCommentEditModalToggle] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const loggedInUser = useSelector(
    (state) => state?.signUpReducer?.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName + loggedInUser?.basicInfo?.lastName;
  const userProfile = loggedInUser?.basicInfo?.profilePicture;
  const commentedUserProfile = comment?.commentedBy?.userProfilePic;
  const loggedInUserProfile = loggedInUser?.basicInfo?.profilePicture;
  const replyCommentsArray = comment.replyComments;

  const commentId = comment.commentId;
  const timerOfCreated = comment.commentedAt;
  const { timer } = useTimer({ timerOfCreated });

  const replyCommentInputRef = useRef(null);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const handleReply = () => {
    setShowReplyInput(!showReplyInput);
  };
  const handleReplyComment = (event) => {
    event.preventDefault();
    const replyCommentId = Math.floor(Math.random() * 100000) + 5;
    const form = event.target;
    const replyComment = form.replyComment.value;

    const replyBy = { userFullName, userProfile };
    const postedReplyComment = {
      replyComment,
      replyCommentId,
      replyBy,
      repliedAt: new Date(),
    };
    fetch(
      `https://miniverse-server.vercel.app/posts/${postId}/comments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(postedReplyComment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          form.reset();
          setShowReplyInput(false);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEditComment = () => {
    setCommentEditModalToggle(true);
  };

  const handleSubmitEditComment = (event) => {
    event.preventDefault();
    console.log(editedComment);
    const updatedComment = { editedComment };
    fetch(
      `http://localhost:5000/posts/${postId}/updateComment/${comment?.commentId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedComment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCommentEditModalToggle(false);
          refetch();
          Swal.fire("Comment Edited!", "", "success");
        }
      });
  };

  const handleDeleteComment = (commentId, postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://miniverse-server.vercel.app/post/${postId}/deleteComment/${commentId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.isDeleted) {
              refetch();
              Swal.fire(
                "Comment Deleted!",
                "Your file has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  console.log(editedComment);

  return (
    <div>
      <div className="mb-5">
        <div className="flex items-start">
          <div className="avatar mr-3">
            <div className="w-9 rounded-full">
              <img
                draggable={false}
                src={comment?.commentedBy?.userProfilePic}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="card bg-gray-200 w-11/12">
              <div className="px-4 py-2">
                <>
                  <h2 className="text-sm font-semibold">
                    {comment?.commentedBy?.userFullName}
                  </h2>
                  {commentEditModalToggle ? (
                    <form
                      action=""
                      className="relative"
                      onSubmit={handleSubmitEditComment}
                    >
                      <input
                        type="text"
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                        className="text-sm font-medium p-3 rounded-xl my-3 bg-white outline-none w-full"
                      />
                      <button
                        type="submit"
                        className="absolute top-[27px] right-3"
                      >
                        {" "}
                        <img
                          className="w-3"
                          src="https://i.ibb.co/MsSxMrG/send-message.png"
                          alt=""
                        />
                      </button>
                    </form>
                  ) : (
                    <p>{comment?.comment}</p>
                  )}
                </>
              </div>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end w-1/12 ml-8">
              <label tabIndex={0} className="m-1 cursor-pointer">
                <span>
                  <FaEllipsisH className="mr-2 text-xl"></FaEllipsisH>
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-1 px-2 shadow bg-base-100 rounded-box w-72"
              >
                <>
                  {loggedInUserProfile === commentedUserProfile && (
                    <>
                      <div
                        onClick={handleEditComment}
                        className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                      >
                        <p className="">Edit comment</p>
                      </div>
                      <div
                        onClick={() =>
                          handleDeleteComment(comment?.commentId, postId)
                        }
                        className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                      >
                        <p className="">Delete comment</p>
                      </div>
                    </>
                  )}
                </>
                <div
                  className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                >
                  <p className="">Hide comment</p>
                </div>
                <div
                  className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                >
                  <p className="">Report this comment</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-start ml-14">
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            Love
          </p>
          <p
            onClick={handleReply}
            className="text-sm font-semibold cursor-pointer hover:underline mx-3"
          >
            Replay
          </p>
          <p className="text-sm font-semibold">{timer}</p>
        </div>
        {showReplyInput && (
          <div className="flex items-center ml-8 mt-2">
            <div className="avatar mr-3">
              <div className="w-10 rounded-full">
                <img
                  draggable={false}
                  src={loggedInUser?.basicInfo?.profilePicture}
                  alt=""
                />
              </div>
            </div>
            <form className="w-10/12" onSubmit={handleReplyComment}>
              <div className="flex items-center mb-5 relative">
                <input
                  ref={replyCommentInputRef}
                  type="text"
                  name="replyComment"
                  required
                  placeholder="Write a Reply..."
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
        )}
        {/* reply comment start */}
        {replyCommentsArray.map((reply, i) => (
          <ReplyCommentCard
            key={i}
            nestingLevel={nestingLevel + 1}
            reply={reply}
            refetch={refetch}
            post={post}
            postId={postId}
            commentId={commentId}
          ></ReplyCommentCard>
        ))}
        {/* reply comment end */}
      </div>
    </div>
  );
};

export default CommentCard;
