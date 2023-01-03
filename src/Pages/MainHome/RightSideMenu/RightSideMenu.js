import React from "react";
import { FaSearch } from "react-icons/fa";

const RightSideMenu = () => {
  return (
    <div className="px-5">
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-xl">Messages</h3>
              <img
                src="https://i.ibb.co/Psk8TjS/edit.png"
                alt=""
                className="w-7"
              />
            </div>
            <div>
              {/* right side topbar start */}
              <div className="relative flex items-center mb-5">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-12
                  focus:outline-none"
                />
                <img
                  className="absolute left-5 top-1/2 w-4"
                  src="https://i.ibb.co/hYwBRBJ/search-interface-symbol.png"
                  alt=""
                />
              </div>
              {/* right side topbar end */}
              {/* tabs start */}
              <div>
                <div className="tabs w-full">
                  <p className="tab tab-bordered tab-active">Inbox</p>
                  <p className="tab tab-bordered">Groups</p>
                  <p className="tab tab-bordered">Requests</p>
                </div>
              </div>
              {/* tabs end */}
              {/* messages start */}
              <div className="mt-5">
                {/* single message start */}
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Kathrine Langford</h5>
                    <p className="text-gray-500">Hello bro what's up!</p>
                  </div>
                </div>
                {/* single message end */}
              </div>
              {/* messages end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
