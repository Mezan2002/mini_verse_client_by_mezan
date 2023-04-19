import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PostCardDropDown = ({ post, refetch }) => {
  const postedUserCode = post.postedBy.userCode;
  const loggedInUserCode = useSelector(
    (state) => state?.signUpReducer?.loggedInUser[0]?.userCode
  );

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/deletePost/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="m-1 cursor-pointer">
          <span>
            <FaEllipsisH className="mr-2 text-xl"></FaEllipsisH>
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
        >
          {loggedInUserCode === postedUserCode && (
            <>
              {" "}
              <div
                className={`flex items-center hover:bg-gray-200 ${
                  post?.postedImage ? "p-3" : "p-2"
                } cursor-pointer m-2 rounded-2xl`}
              >
                <img
                  draggable={false}
                  src="https://i.ibb.co/JH0SJXc/edit-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Edit Post</p>
              </div>
              <div
                onClick={() => handleDelete(post._id)}
                className={`flex items-center hover:bg-gray-200 ${
                  post?.postedImage ? "p-3" : "p-2"
                } cursor-pointer m-2 rounded-2xl`}
              >
                <img
                  draggable={false}
                  src="https://i.ibb.co/SBkdp91/delete-1.png"
                  alt=""
                  className="w-6 mr-5"
                />
                <p className="">Delete Post</p>
              </div>
            </>
          )}
          <div
            className={`flex items-center hover:bg-gray-200 ${
              post?.postedImage ? "p-3" : "p-2"
            } cursor-pointer m-2 rounded-2xl`}
          >
            <img
              draggable={false}
              src="https://i.ibb.co/yf2RjzH/save-instagram.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Save</p>
          </div>
          <div
            className={`flex items-center hover:bg-gray-200 ${
              post?.postedImage ? "p-3" : "p-2"
            } cursor-pointer m-2 rounded-2xl`}
          >
            <img
              draggable={false}
              src="https://i.ibb.co/7QZgZ5g/link.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Copy Link</p>
          </div>
          {post.postedImage && (
            <div
              className={`flex items-center hover:bg-gray-200 ${
                post?.postedImage ? "p-3" : "p-2"
              } cursor-pointer m-2 rounded-2xl`}
            >
              <img
                draggable={false}
                src="https://i.ibb.co/qmDXmxW/document.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Hide post</p>
            </div>
          )}
          {post.postedImage && (
            <div
              className={`flex items-center hover:bg-gray-200 ${
                post?.postedImage ? "p-3" : "p-2"
              } cursor-pointer m-2 rounded-2xl`}
            >
              <img
                draggable={false}
                src="https://i.ibb.co/R7GBGBB/warning.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Report this post</p>
            </div>
          )}
          <div
            className={`flex items-center hover:bg-gray-200 ${
              post?.postedImage ? "p-3" : "p-2"
            } cursor-pointer m-2 rounded-2xl`}
          >
            <img
              draggable={false}
              src="https://i.ibb.co/VNT4tRr/remove-user.png"
              alt=""
              className="w-6 mr-5"
            />
            <p className="">Unfollow Mezan</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PostCardDropDown;
