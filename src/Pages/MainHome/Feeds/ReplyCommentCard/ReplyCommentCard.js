import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";

const ReplyCommentCard = ({ reply, post }) => {
  console.log(reply);
  const postedUserCode = post.postedBy?.userCode;
  const loggedInUserCode = useSelector(
    (state) => state?.signUpReducer?.loggedInUser[0]?.userCode
  );
  return (
    <div>
      <div className="ml-8 mt-5">
        <div className="flex items-start">
          <div className="avatar mr-3">
            <div className="w-9 rounded-full">
              <img draggable={false} src={reply?.replyBy?.userProfile} alt="" />
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="card bg-gray-200 w-11/12">
              <div className="px-4 py-2">
                <h2 className="text-sm font-semibold">
                  {reply?.replyBy?.userFullName}
                </h2>
                <p>{reply?.replyComment}</p>
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
                  {loggedInUserCode === postedUserCode && (
                    <>
                      <div
                        className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                      >
                        <p className="">Edit comment</p>
                      </div>
                      <div
                        className={`flex items-center hover:bg-gray-200 p-2 cursor-pointer m-2 rounded-xl`}
                      >
                        <p className="">Delete comment</p>
                      </div>
                    </>
                  )}
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
      </div>
    </div>
  );
};

export default ReplyCommentCard;
