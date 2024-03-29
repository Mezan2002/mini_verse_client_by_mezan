import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";
import axios from "axios";
import "./PostModal.css";
import Loading from "../../Shared/Loading/Loading";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PostModal = ({ modalToggle, setModalToggle, refetch }) => {
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName +
    " " +
    loggedInUser?.basicInfo?.lastName;
  const userImage = loggedInUser?.basicInfo?.profilePicture;
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  /*  const handleRemoveImage = () => {
    setSelectedImage(null);
  }; */
  const handleTextChange = (event) => {
    setPostText(event.target.value);
    resizeTextArea(event.target);
  };
  const resizeTextArea = (textArea) => {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const postedText = form.postedText.value;
    const image = form.uploadedImage.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const postedAt = new Date();
    const postedBy = {
      userFullName,
      profilePicture: loggedInUser?.basicInfo?.profilePicture,
      usersCountry: loggedInUser?.locationInfo?.country,
      userCode: loggedInUser?.userCode,
    };
    const textDataOnly = {
      postedText,
      postedAt,
      comments: [],
      postedBy,
      postLikedBy: [],
      share: 0,
    };
    if (image) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          const postedImage = response.data.data.url;
          const postedData = {
            postedText,
            postedImage,
            postedAt,
            postedBy,
            postLikedBy: [],
            comments: [],
            share: 0,
          };
          fetch("https://miniverse-server.vercel.app/newPost", {
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
                setPostText("");
                setSelectedImage(null);
                setModalToggle(false);
                setLoading(false);
                toast.success("Posted Successfully!");
                refetch();
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch("https://miniverse-server.vercel.app/newPost", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(textDataOnly),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            form.reset();
            setPostText("");
            setModalToggle(false);
            setLoading(false);
            Swal.fire("Posted Successfully!", "", "success");
            refetch();
          }
        })
        .catch((err) => console.log(err));
    }
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
                  <img
                    loading="lazy"
                    draggable={false}
                    src={userImage}
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="font-semibold">{userFullName}</h5>
                <button className="btn btn-xs">
                  <FaUserFriends className="mr-2"></FaUserFriends> Friends
                  <FaChevronDown className="ml-2"></FaChevronDown>
                </button>
              </div>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <div>
                  <textarea
                    name="postedText"
                    onChange={handleTextChange}
                    value={postText}
                    className="w-full h-8 focus:outline-none text-xl"
                    placeholder="What's on your mind, Mezan?"
                  ></textarea>
                </div>
                <div className="w-full border border-gray-300 h-64 my-3 overflow-auto rounded-xl relative">
                  {selectedImage === null ? (
                    <>
                      {" "}
                      <label
                        htmlFor="uploadedImage"
                        className="flex items-center justify-center h-full flex-col-reverse"
                      >
                        <h2>Add a single image</h2>
                        <figure>
                          <img
                            loading="lazy"
                            draggable={false}
                            src="https://i.ibb.co/zxPs4Tq/gallery.png"
                            alt=""
                            className="w-7"
                            title="Photo or Video"
                          />
                        </figure>
                      </label>
                      <input
                        onChange={handleImageChange}
                        type="file"
                        name="selectSingleImage"
                        id="selectSingleImage"
                        className="hidden invisible"
                      />
                    </>
                  ) : (
                    <img
                      loading="lazy"
                      draggable={false}
                      src={selectedImage}
                      alt=""
                      className="imageDiv"
                    />
                  )}
                </div>
                <div className="w-full rounded-xl h-16 border border-gray-200 p-5 flex items-center justify-between">
                  <h3 className="text-lg font-medium">Add with your post</h3>
                  <div className="flex items-center">
                    <div
                      className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full 
              hover:bg-gray-200 duration-300"
                    >
                      <input
                        onChange={handleImageChange}
                        type="file"
                        name="uploadedImage"
                        id="uploadedImage"
                        className="hidden invisible"
                      />
                      <label htmlFor="uploadedImage">
                        <figure>
                          <img
                            loading="lazy"
                            draggable={false}
                            src="https://i.ibb.co/zxPs4Tq/gallery.png"
                            alt=""
                            className="w-7 cursor-pointer"
                            title="Photo or Video"
                          />
                        </figure>
                      </label>
                    </div>
                    <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/h7JLXFy/tag.png"
                        alt=""
                        className="w-7"
                        title="Tag People"
                      />
                    </div>
                    <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/DgwPvXm/smile.png"
                        alt=""
                        className="w-7"
                        title="Feelings"
                      />
                    </div>
                    <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/b3d154s/check-point.png"
                        alt=""
                        className="w-7"
                        title="Check In"
                      />
                    </div>
                    <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/crBhvbF/calendar.png"
                        alt=""
                        className="w-7"
                        title="Events"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {postText === null && selectedImage === null ? (
                    <input
                      type="submit"
                      className="btn btn-block mt-2"
                      value="Post"
                      disabled
                      title="please put a caption"
                    ></input>
                  ) : (
                    <>
                      <button type="submit" className="btn btn-block mt-2">
                        {loading ? <Loading></Loading> : "Post"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};
export default PostModal;
