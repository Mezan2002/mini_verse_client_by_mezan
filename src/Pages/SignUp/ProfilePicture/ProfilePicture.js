import React, { useState } from "react";

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageHostingKey = process.env.REACT_APP_IMAGE_HOSTING_SERVER_API;

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
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
            <li data-content="✓" className="step step-neutral">
              Profile Picture
            </li>
            <li data-content="✓" className="step step-neutral">
              Location Info
            </li>
            <li data-content="✓" className="step step-neutral">
              Working Info
            </li>
            <li data-content="✓" className="step step-neutral">
              Link Social Media
            </li>
          </ul>
        </div>
        {/* Steps End  */}
        <div className="flex items-center justify-center min-h-[90vh]">
          <div className="border w-4/12 rounded-xl">
            <h2 className="text-2xl font-medium uppercase text-center my-10">
              Profile Picture
            </h2>
            <div className="px-10">
              <div className="w-48 border border-gray-300 h-48 mx-auto my-3 overflow-hidden rounded-full">
                {selectedImage === null ? (
                  <>
                    {" "}
                    <label
                      htmlFor="selectProfilePicture"
                      className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
                    >
                      <h2 className="text-center mt-4 text">
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
                      onChange={handleImageChange}
                      type="file"
                      name="selectProfilePicture"
                      id="selectProfilePicture"
                      className="hidden invisible"
                    />
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
              <div className="flex justify-between mt-10">
                <button className="btn my-5">Previous</button>
                <button type="submit" className="btn my-5">
                  Next
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
