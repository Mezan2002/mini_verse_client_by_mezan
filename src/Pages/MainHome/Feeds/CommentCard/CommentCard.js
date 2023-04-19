import React, { useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";
import useTimer from "../../../../Hooks/useTimer/useTimer";

const CommentCard = ({ comment }) => {
  const timerOfCreated = comment.commentedAt;
  const { timer } = useTimer({ timerOfCreated });
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer.loggedInUser[0]
  );
  const replyCommentInputRef = useRef(null);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const handleReply = () => {
    setShowReplyInput(!showReplyInput);
    replyCommentInputRef?.current?.focus();
  };

  const handleReplyComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const replyComment = form.replyComment.value;
    console.log(replyComment);
  };

  return (
    <div>
      <div>
        <div className="flex items-start">
          <div className="avatar mr-3">
            <div className="w-9 rounded-full">
              <img
                draggable={false}
                src={comment.commentedBy.userProfilePic}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="card bg-gray-200 w-11/12">
              <div className="px-4 py-2">
                <h2 className="text-sm font-semibold">
                  {comment.commentedBy.userFullName}
                </h2>
                <p>{comment.comment}</p>
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
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
              >
                <>
                  {" "}
                  <div
                    className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                  >
                    <p className="">Edit comment</p>
                  </div>
                  <div
                    // onClick={() => handleDelete(post._id)}
                    className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                  >
                    <p className="">Delete comment</p>
                  </div>
                </>
                <div
                  className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                >
                  <p className="">Hide comment</p>
                </div>
                <div
                  className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
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
          <div className="flex items-center ml-8 mt-5">
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
                  placeholder="Write a Reply..."
                  className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-5
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
        {/*  <div className="ml-8 mt-5">
          <div className="flex items-start">
            <div className="avatar mr-3">
              <div className="w-9 rounded-full">
                <img draggable={false} src="" alt="" />
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="card bg-gray-200 w-11/12">
                <div className="px-4 py-2">
                  <h2 className="text-sm font-semibold">Mezanur Rahman</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
                >
                  <>
                    {" "}
                    <div
                      className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                    >
                      <p className="">Edit comment</p>
                    </div>
                    <div
                      // onClick={() => handleDelete(post._id)}
                      className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                    >
                      <p className="">Delete comment</p>
                    </div>
                  </>
                  <div
                    className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                  >
                    <p className="">Hide comment</p>
                  </div>
                  <div
                    className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
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
            <p className="text-sm font-semibold cursor-pointer hover:underline mx-3">
              Replay
            </p>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              2h
            </p>
          </div>
        </div> */}
        {/* reply comment end */}
      </div>
    </div>
  );
};

export default CommentCard;
