import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";

const PostModal = ({ modalToggle, setModalToggle }) => {
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;
  const { register, handleSubmit, reset } = useForm();
  const [postText, setPostText] = useState(null);
  const [image, setImage] = useState(null);
  const handlePost = (data) => {
    const postedText = data.postedText;
    const image = data.uploadedImage[0];
    const formData = new FormData();
    formData.append("image", image);

    // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingKey}`;
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    /* fetch("http://localhost:5000/newPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",i
      },
      body: JSON.stringify(postedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          setPostText(null);
          setModalToggle(false);
          toast.success("Posted Successfully!");
        }
      })
      .catch((err) => console.log(err)); */
  };
  return (
    modalToggle === true && (
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
            <form onSubmit={handleSubmit(handlePost)}>
              <div>
                <textarea
                  {...register("postedText", { require: true })}
                  onChange={(e) => {
                    e.target.value >= 0
                      ? setPostText(null)
                      : setPostText(e.target.value);
                  }}
                  className="w-full h-40 focus:outline-none text-xl"
                  placeholder="What's on your mind, Mezan?"
                ></textarea>
              </div>
              <div className="w-full rounded-xl h-16 border border-gray-200 p-5 flex items-center justify-between">
                <h3 className="text-lg font-medium">Add with your post</h3>
                <div className="flex items-center">
                  <div
                    className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full 
              hover:bg-gray-200 duration-300"
                  >
                    <input
                      {...register("uploadedImage")}
                      type="file"
                      name="uploadedImage"
                      id="uploadedImage"
                      className="hidden invisible"
                    />
                    <label htmlFor="uploadedImage">
                      <figure>
                        <img
                          src="https://i.ibb.co/zxPs4Tq/gallery.png"
                          alt=""
                          className="w-7"
                          title="Photo or Video"
                        />
                      </figure>
                    </label>
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
                {postText === null && image === null ? (
                  <input
                    type="submit"
                    className="btn btn-block mt-2"
                    value="Post"
                    disabled
                  ></input>
                ) : (
                  <input
                    type="submit"
                    className="btn btn-block mt-2"
                    value="Post"
                  ></input>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default PostModal;
