import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";
import useTimer from "../../../../Hooks/useTimer/useTimer";
import Swal from "sweetalert2";

const ReplyCommentCard = ({
  reply,
  refetch,
  postId,
  commentId,
  nestingLevel,
}) => {
  const timerOfCreated = reply?.repliedAt;
  const [showReplyInput, setShowReplyInput] = useState(false);
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer?.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName +
    " " +
    loggedInUser?.basicInfo?.lastName;
  const userProfile = loggedInUser?.basicInfo?.profilePicture;
  const repliedUserProfile = reply?.replyBy?.userProfile;
  const loggedInUserProfile = loggedInUser?.basicInfo?.profilePicture;

  const { timer } = useTimer({ timerOfCreated });

  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput);
  };
  const handleReplyComment = (event) => {
    event.preventDefault();
    const replyCommentId = Math.floor(Math.random() * 100000) + 5;
    const form = event.target;
    const replyOfRepliedComment = form.replyOfRepliedComment.value;
    const replyBy = { userFullName, userProfile };
    const postedReplyComment = {
      replyOfRepliedComment,
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
          form.reset();
          setShowReplyInput(false);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteComment = (postId, commentId, replyCommentId) => {
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
          `https://miniverse-server.vercel.app/posts/${postId}/comments/${commentId}/replies/${replyCommentId}`,
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

  return (
    <div>
      <div className="mx-8 mt-5">
        <div style={{ marginLeft: `${nestingLevel * 20}px` }}>
          <div className="flex items-start">
            <div className="avatar mr-3">
              <div className="w-9 rounded-full">
                <img
                  loading="lazy"
                  draggable={false}
                  src={reply?.replyBy?.userProfile}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="card bg-gray-200 w-11/12">
                <div className="px-4 py-2">
                  <h2 className="text-sm font-semibold">
                    {reply?.replyBy?.userFullName}
                  </h2>
                  {reply?.replyOfRepliedComment ? (
                    <p>{reply?.replyOfRepliedComment}</p>
                  ) : (
                    <p>{reply?.replyComment}</p>
                  )}
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
                    {" "}
                    {loggedInUserProfile === repliedUserProfile && (
                      <>
                        <div
                          className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                        >
                          <p className="">Edit comment</p>
                        </div>
                        <div
                          className={`flex items-center hover:bg-gray-200 py-1 px-2 cursor-pointer m-2 rounded-xl`}
                        >
                          <p
                            onClick={() =>
                              handleDeleteComment(
                                postId,
                                commentId,
                                reply?.replyCommentId
                              )
                            }
                            className=""
                          >
                            Delete comment
                          </p>
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
              onClick={handleReplyClick}
              className="text-sm font-semibold cursor-pointer hover:underline mx-3"
            >
              Replay
            </p>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              {timer}
            </p>
          </div>
        </div>
        {showReplyInput && (
          <div className="flex items-center ml-8 mt-2">
            <div className="avatar mr-3">
              <div className="w-10 rounded-full">
                <img
                  loading="lazy"
                  draggable={false}
                  src={loggedInUser?.basicInfo?.profilePicture}
                  alt=""
                />
              </div>
            </div>
            <form className="w-10/12" onSubmit={handleReplyComment}>
              <div className="flex items-center mb-5 relative">
                <input
                  type="text"
                  name="replyOfRepliedComment"
                  required
                  placeholder="Write a Reply..."
                  className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-5 pr-12
                  focus:outline-none"
                />
                <button type="submit" className="absolute top-1/2 right-4">
                  <img
                    loading="lazy"
                    className="w-4"
                    src="https://i.ibb.co/MsSxMrG/send-message.png"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyCommentCard;
