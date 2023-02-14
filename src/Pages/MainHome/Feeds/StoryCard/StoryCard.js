import React from "react";
import { FaPlus } from "react-icons/fa";

const StoryCard = () => {
  return (
    <div>
      <div className="card  shadow-xl grid grid-cols-4 p-5 gap-3">
        {/* create story card start */}
        <div className="z-0">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative">
            <figure>
              <img
                src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                alt="Shoes"
                className="h-48"
              />
            </figure>
            <div className="py-3 text-center font-semibold">
              <p>Create Story</p>
            </div>
            <div className="bg-primary border-white border-2 absolute top-[71%] left-[38%] rounded-full text-white h-8 w-8 flex justify-center items-center">
              <span>
                <FaPlus className="text-lg"></FaPlus>
              </span>
            </div>
          </div>
        </div>
        {/* create story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card w-9/12 mx-auto h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                src="https://images.prothomalo.com/prothomalo-english%2F2022-12%2F19fe3ca1-4e88-4f85-bba8-446e6112559b%2FShakib_Al_Hasan.webp?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="text-sm">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
      </div>
    </div>
  );
};

export default StoryCard;
