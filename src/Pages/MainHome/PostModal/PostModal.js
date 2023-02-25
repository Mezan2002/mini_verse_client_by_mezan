import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";
import axios from "axios";
import "./PostModal.css";
import Loading from "../../Shared/Loading/Loading";

const PostModal = ({ modalToggle, setModalToggle, refetch }) => {
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;
  const [postText, setPostText] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
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
    const textDataOnly = {
      postedText,
      postedAt,
      likes: 0,
      comments: [],
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
            likes: 0,
            comments: [],
            share: 0,
          };
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
                setPostText(null);
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
      fetch("http://localhost:5000/newPost", {
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
            setPostText(null);
            setModalToggle(false);
            setLoading(false);
            toast.success("Posted Successfully!");
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
                    src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                    alt=""
                  />
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
            <form onSubmit={handleFormSubmit}>
              <div>
                <div>
                  <textarea
                    name="postedText"
                    onChange={(e) => {
                      e.target.value >= 0
                        ? setPostText(null)
                        : setPostText(e.target.value);
                    }}
                    className="w-full h-8 focus:outline-none text-xl"
                    placeholder="What's on your mind, Mezan?"
                  ></textarea>
                </div>
                <div className="w-full border border-gray-300 h-64 my-3 overflow-auto rounded-xl">
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
                    <img src={selectedImage} alt="" className="imageDiv" />
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
