import React from "react";
import { FaPlus } from "react-icons/fa";

const StoryCard = () => {
  return (
    <div>
      <div className="card shadow grid lg:grid-cols-4 2xl:grid-cols-5 p-5 gap-3">
        {/* create story card start */}
        <div className="z-0">
          <div className="card 2xl:w-11/12 mx-auto 2xl:h-[230px] shadow relative">
            <figure>
              <img
                draggable={false}
                src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                alt="Shoes"
                className="h-48"
              />
            </figure>
            <div className="lg:py-3 2xl:py-4 text-center font-semibold">
              <p>Create Story</p>
            </div>
            <div
              className="bg-primary border-white border-2 absolute lg:top-[72%] lg:left-[36%] 
              2xl:top-[67%] 2xl:left-[36%] rounded-full
             text-white lg:h-8 lg:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center"
            >
              <span>
                <FaPlus className="lg:text-lg 2xl:text-xl"></FaPlus>
              </span>
            </div>
          </div>
        </div>
        {/* create story card end */}
        {/* signle story card start */}
        <div className="">
          <div className="card 2xl:w-11/12 mx-auto 2xl:h-[230px] shadow relative image-full min-h-full">
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
          <div className="card 2xl:w-11/12 mx-auto 2xl:h-[230px] shadow relative image-full min-h-full">
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
          <div className="card 2xl:w-11/12 mx-auto 2xl:h-[230px] shadow relative image-full min-h-full">
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
        <div className="lg:hidden 2xl:block">
          <div className="card 2xl:w-11/12 mx-auto 2xl:h-[230px] shadow relative image-full min-h-full">
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
