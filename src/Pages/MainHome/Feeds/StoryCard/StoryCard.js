import React from "react";
import { FaPlus } from "react-icons/fa";

const StoryCard = () => {
  return (
    <div>
      <div className="card  shadow-xl grid grid-cols-4 p-5 gap-3">
        {/* create story card start */}
        <div className="z-0">
          <div className="card 2xl:w-9/12 mx-auto 2xl:h-[230px] shadow-md relative">
            <figure>
              <img
                draggable={false}
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
          <div className="card 2xl:w-9/12 mx-auto 2xl:h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                draggable={false}
                src="https://i.ibb.co/jhr8PDS/336784604-940533650287665-5205716765486193992-n.jpg"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  draggable={false}
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="2xl:text-sm text-xs pr-2">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card 2xl:w-9/12 mx-auto 2xl:h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                draggable={false}
                src="https://i.ibb.co/jhr8PDS/336784604-940533650287665-5205716765486193992-n.jpg"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  draggable={false}
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="2xl:text-sm text-xs pr-2">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card 2xl:w-9/12 mx-auto 2xl:h-[230px] shadow-md relative image-full min-h-full">
            <figure>
              <img
                draggable={false}
                src="https://i.ibb.co/jhr8PDS/336784604-940533650287665-5205716765486193992-n.jpg"
                alt="Shoes"
                className="w-72 h-48"
              />
            </figure>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary z-20 top-5 left-4 ring-offset-base-100 ring-offset-2 absolute">
                <img
                  draggable={false}
                  src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-semibold absolute bottom-3 left-4 text-white z-20">
              <h2 className="2xl:text-sm text-xs pr-2">Shakib Al Hasan</h2>
            </div>
          </div>
        </div>
        {/* signle story card end */}
      </div>
    </div>
  );
};

export default StoryCard;
