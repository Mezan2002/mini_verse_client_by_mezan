import React from "react";
import { FaPlus } from "react-icons/fa";

const Feeds = () => {
  return (
    <div className="">
      {/* feeds start */}
      {/* stories card start */}
      <div className="card  shadow-xl grid grid-cols-4 p-5 gap-3">
        {/* create story card start */}
        <div className="">
          <div className="card w-10/12 shadow-xl relative">
            <figure>
              <img
                src="https://placeimg.com/192/192/people"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="py-5 text-center font-semibold">
              <p>Create Story</p>
            </div>
            <div className="bg-primary border border-white absolute top-[67%] left-[38%] rounded-full text-white h-10 w-10 flex justify-center items-center">
              <span>
                <FaPlus className="text-xl"></FaPlus>
              </span>
            </div>
          </div>
        </div>
        {/* create story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card image-full min-h-[97%] w-9/12 shadow-xl relative">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="py-5 font-semibold absolute bottom-[-10px] left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card image-full min-h-[97%] w-9/12 shadow-xl relative">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="py-5 font-semibold absolute bottom-[-10px] left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card image-full min-h-[97%] w-9/12 shadow-xl relative">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="py-5 font-semibold absolute bottom-[-10px] left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
      </div>
      {/* stories card end */}
      {/* new post section start */}
      <div>
        <div className="card mt-5 rounded-full bg-white shadow-xl">
          <div className="p-4 flex items-center">
            <div className="avatar ml-2">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <input
              type="text"
              className="bg-transparent focus:outline-none ml-5 text-xl w-9/12"
              placeholder="What is your mind, Mezan?"
            />
            <button className="btn rounded-full btn-sm btn-primary absolute right-4">
              Post
            </button>
          </div>
        </div>
      </div>
      {/* new post section end */}
      {/* posts section start */}
      {/* single post card start */}
      <div className="card mt-5 bg-white shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* single post card end */}
      {/* posts section end */}
      {/* feeds end */}
    </div>
  );
};

export default Feeds;
