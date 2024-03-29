import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const EditPostModal = ({
  postData,
  editModalToggle,
  setEditModalToggle,
  refetch,
}) => {
  const loggedInUser = useSelector(
    (state) => state?.signUpReducer.loggedInUser[0]
  );
  const userFullName =
    loggedInUser?.basicInfo?.firstName +
    " " +
    loggedInUser?.basicInfo?.lastName;
  const userImage = loggedInUser?.basicInfo?.profilePicture;
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;
  const [textareaValue] = useState(postData?.postedText);
  const textareaRef = useRef(null);
  const [editedPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleFormSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const editedPostText = form.editedPostText.value;
    if (selectedImage) {
      const formData = new FormData();
      const image = form.editedImage.files[0];
      formData.append("image", image);

      // Upload the updated image to imgbb.com
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          const updatedImage = response.data.data.url;
          const updatedData = { editedPostText, updatedImage };
          // Update the image on the backend
          fetch(
            `https://miniverse-server.vercel.app/updateImage/${postData._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(updatedData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setLoading(false);
                refetch();
                setEditModalToggle(false);
                Swal.fire("Post Edited Successfully!", "", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const editedPostText = form.editedPostText.value;
      const updatedData = { editedPostText };

      // Update the post text on the backend
      fetch(`https://miniverse-server.vercel.app/updatedPost/${postData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            // If there is no updated image, simply close the modal
            setLoading(false);
            refetch();
            setEditModalToggle(false);
            Swal.fire("Post Edited Successfully!", "", "success");
          }
        });
    }
  };

  const handleChange = (event) => {
    // setTextareaValue(event.target.value);
    resizeTextArea(event.target);
  };

  const resizeTextArea = (textArea) => {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  useEffect(() => {
    const textArea = textareaRef.current;
    resizeTextArea(textArea);
  }, [postData?.postedText]);

  const handleCloseEditModal = () => {
    setEditModalToggle(false);
  };

  return (
    editModalToggle && (
      <div>
        <div>
          <input type="checkbox" id="editPostModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                onClick={handleCloseEditModal}
                htmlFor="editPostModal"
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
                      ref={textareaRef}
                      name="editedPostText"
                      onChange={handleChange}
                      className="w-full h-8 focus:outline-none text-xl"
                      placeholder="What's on your mind, Mezan?"
                      defaultValue={postData?.postedText}
                      value={textareaValue}
                    ></textarea>
                  </div>
                  {postData?.postedImage && (
                    <div className="w-full border border-gray-300 h-64 my-3 overflow-auto rounded-xl">
                      <img
                        loading="lazy"
                        draggable={false}
                        src={`${
                          selectedImage === ""
                            ? postData?.postedImage
                            : selectedImage
                        }`}
                        alt=""
                        className="imageDiv"
                      />
                    </div>
                  )}
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
                          name="editedImage"
                          id="editSingleImage"
                          className="hidden invisible"
                        />
                        <label htmlFor="editSingleImage">
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
                    {editedPostText === null && selectedImage === null ? (
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
                          {loading ? <Loading></Loading> : "Edit Post"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditPostModal;
