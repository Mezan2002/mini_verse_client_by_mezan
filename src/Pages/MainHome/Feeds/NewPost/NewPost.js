import React from "react";
import PostModal from "../../PostModal/PostModal";
const NewPost = ({ refetch, setModalToggle, modalToggle }) => {
  return (
    <div>
      <div>
        <div className="card mt-5 rounded-full bg-white shadow-md">
          <div className="avatar absolute top-3 left-5">
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                alt=""
              />
            </div>
          </div>
          <label htmlFor="addPostModal" onClick={() => setModalToggle(true)}>
            <div className="p-4 flex items-center">
              <div className="ml-14 relative">
                <h2 className="text-lg text-gray-400">
                  What is your mind, Mezan?
                </h2>
              </div>
              <div className="rounded-full flex items-center justify-center h-10 w-24 text-white bg-primary absolute right-4">
                <h2>Post</h2>
              </div>
            </div>
          </label>
        </div>
        <PostModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          refetch={refetch}
        ></PostModal>
      </div>
    </div>
  );
};

export default NewPost;
