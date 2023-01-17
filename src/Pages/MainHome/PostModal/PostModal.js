import React from "react";
import { toast } from "react-hot-toast";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";

const PostModal = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const postedText = form.postedText.value;
    const postedData = { postedText };
    fetch("http://localhost:5000/newPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Posted Successfully!");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="checkbox" id="addPostModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addPostModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">Create post</h3>
          <div className="divider"></div>
          <form onSubmit={handlePost}>
            <div className="flex items-center mb-10">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="font-semibold">Mezanur Rahman</h5>
                <button className="btn btn-xs">
                  <FaUserFriends className="mr-2"></FaUserFriends> Friends
                  <FaChevronDown className="ml-2"></FaChevronDown>
                </button>
              </div>
            </div>

            <div>
              <textarea
                name="postedText"
                className="w-full h-40 focus:outline-none text-xl"
                placeholder="What's on your mind, Mezan?"
              ></textarea>
            </div>
            <div className="w-full rounded-xl h-16 border border-gray-200 p-5 flex items-center justify-between">
              <h3 className="text-lg font-medium">Add with your post</h3>
              <div className="flex items-center">
                <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                  <img
                    src="https://i.ibb.co/zxPs4Tq/gallery.png"
                    alt=""
                    className="w-7"
                    title="Photo or Video"
                  />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                  <img
                    src="https://i.ibb.co/h7JLXFy/tag.png"
                    alt=""
                    className="w-7"
                    title="Tag People"
                  />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                  <img
                    src="https://i.ibb.co/DgwPvXm/smile.png"
                    alt=""
                    className="w-7"
                    title="Feelings"
                  />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                  <img
                    src="https://i.ibb.co/b3d154s/check-point.png"
                    alt=""
                    className="w-7"
                    title="Check In"
                  />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                  <img
                    src="https://i.ibb.co/crBhvbF/calendar.png"
                    alt=""
                    className="w-7"
                    title="Events"
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-block mt-2"
                value="Post"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
