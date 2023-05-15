import axios from "axios";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProfilePicture = ({
  setProfilePic,
  setCoverPic,
  stepNext,
  stepPrevious,
  register,
  errors,
  formState,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (image) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          formData,
          config
        )
        .then((response) => {
          setProfilePic(response.data.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleCoverImage = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (image) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          formData,
          config
        )
        .then((response) => {
          setCoverPic(response.data.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div>
        {/* Steps Start */}
        <div className="flex justify-center items-center my-4">
          <ul className="steps">
            <li data-content="✓" className="step step-neutral">
              Sign Up Info
            </li>
            <li data-content="✓" className="step step-neutral">
              User Name
            </li>
            <li data-content="3" className="step step-neutral">
              Profile Picture
            </li>
            <li data-content="4" className="step">
              Location Info
            </li>
            <li data-content="5" className="step">
              Working Info
            </li>
            <li data-content="6" className="step">
              Link Social Media
            </li>
          </ul>
        </div>
        {/* Steps End  */}
        <div className="flex items-center justify-center min-h-[90vh]">
          <div className="border lg:w-6/12 2xl:w-4/12 xl:w-5/12 rounded-xl">
            <h2 className="text-2xl font-medium capitalize text-center my-10">
              Profile & Cover
            </h2>
            <div className="px-10">
              <div className="w-40 border border-gray-300 h-40 mx-auto my-3 overflow-hidden rounded-full">
                {selectedImage === null ? (
                  <>
                    {" "}
                    <label
                      htmlFor="selectProfilePicture"
                      className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
                    >
                      <h2 className="text-center mt-4 text-sm capitalize">
                        Select your profile picture
                      </h2>
                      <figure>
                        <img
                          draggable={false}
                          src="https://i.ibb.co/zxPs4Tq/gallery.png"
                          alt=""
                          className="w-7"
                          title="Photo or Video"
                        />
                      </figure>
                    </label>
                    <input
                      {...register("selectedImage", { required: true })}
                      onChange={handleImageChange}
                      type="file"
                      id="selectProfilePicture"
                      className="hidden invisible"
                    />
                    {errors.profilePicture && (
                      <span className="text-red-500">
                        Profile Picture is required
                      </span>
                    )}
                  </>
                ) : (
                  <img
                    draggable={false}
                    src={selectedImage}
                    alt=""
                    className="imageDiv h-full w-full object-cover"
                  />
                )}
              </div>
              <label
                htmlFor="selectedCoverPhoto"
                className="text-purple-700 text-center flex justify-center cursor-pointer"
              >
                Upload Profile Picture
              </label>
              <div className="w-[500px] border border-gray-300 h-40 mx-auto my-3 overflow-hidden rounded-md">
                {coverImage === null ? (
                  <>
                    {" "}
                    <label
                      htmlFor="selectedCoverPhoto"
                      className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
                    >
                      <h2 className="text-center mt-4 text-sm capitalize">
                        Select your cover picture
                      </h2>
                      <figure>
                        <img
                          draggable={false}
                          src="https://i.ibb.co/zxPs4Tq/gallery.png"
                          alt=""
                          className="w-7"
                        />
                      </figure>
                    </label>
                    <input
                      {...register("coverPic", { required: true })}
                      onChange={handleCoverImage}
                      type="file"
                      id="selectedCoverPhoto"
                      className="hidden invisible"
                    />
                    {errors.profilePicture && (
                      <span className="text-red-500">
                        Cover Picture is required
                      </span>
                    )}
                  </>
                ) : (
                  <img
                    draggable={false}
                    src={coverImage}
                    alt=""
                    className="imageDiv h-full w-full object-cover"
                  />
                )}
              </div>
              <label
                htmlFor="selectedCoverPhoto"
                className="text-purple-700 text-center flex justify-center cursor-pointer"
              >
                Upload Cover Picture
              </label>
              <div className="grid grid-cols-2 gap-5">
                <button onClick={stepPrevious} className="btn w-full my-5">
                  <MdKeyboardArrowLeft className="text-xl"></MdKeyboardArrowLeft>{" "}
                  Previous
                </button>
                <button
                  onClick={stepNext}
                  disabled={!selectedImage && !coverImage}
                  type="submit"
                  className="btn w-full my-5"
                >
                  Next{" "}
                  <MdKeyboardArrowRight className="text-xl"></MdKeyboardArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
