import React from "react";
import "./RightSideMenu.css";
const RightSideMenu = () => {
  return (
    <div className="w-full mainRightSideMenuContainer">
      <div className="2xl:px-2 rightSideMenu fixed max-h-[90vh] overflow-y-auto lg:p-1">
        <div className="">
          {/* messages card start */}
          <div className="card shadow w-full overflow-y-auto max-h-[660px] messagesCard mt-2">
            <div className="z-10 2xl:card-body lg:p-5">
              <div className="z-10">
                {/* right side topbar start */}
                <div className="messageCardTop bg-white sticky top-0 z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-xl z-10">Messages</h3>
                    <img
                      loading="lazy"
                      draggable={false}
                      src="https://i.ibb.co/Psk8TjS/edit.png"
                      alt=""
                      className="w-7"
                    />
                  </div>
                  {/* right side topbar end */}
                  {/* message search field start */}
                  <div className="relative flex items-center mb-5">
                    <input
                      type="text"
                      placeholder="Search"
                      className="py-2 w-full border border-gray-400 text-lg rounded-full mt-4 pl-12
                  focus:outline-none"
                    />
                    <img
                      loading="lazy"
                      draggable={false}
                      className="absolute left-5 top-1/2 w-4"
                      src="https://i.ibb.co/hYwBRBJ/search-interface-symbol.png"
                      alt=""
                    />
                  </div>
                  {/* tabs start */}
                  <div>
                    <div className="tabs w-full">
                      <p className="tab tab-bordered tab-active">Inbox</p>
                      <p className="tab tab-bordered">Groups</p>
                      <p className="tab tab-bordered">Requests</p>
                    </div>
                  </div>
                  {/* tabs end */}
                </div>
                {/* message search field end */}
                {/* messages start */}
                <div className="z-0 mt-10 lg:h-80 2xl:h-96 overflow-auto">
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Mehedi Hasan</h5>
                      <p className="text-gray-500">Pick the call.</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Muhit Khan</h5>
                      <p className="text-gray-500">Hey, Please Join Us.</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Mukit Khan</h5>
                      <p className="text-gray-500">Go to our home.</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Mukit Khan</h5>
                      <p className="text-gray-500">Go to our home.</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Mukit Khan</h5>
                      <p className="text-gray-500">Go to our home.</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Kathrine Langford</h5>
                      <p className="text-gray-500">Hello bro what's up!</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Robiul Islam</h5>
                      <p className="text-gray-500">Come on the party</p>
                    </div>
                  </div>
                  {/* single message end */}
                  {/* single message start */}
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-200">
                    <div className="avatar">
                      <div className="w-[51px] rounded-full">
                        <img
                          loading="lazy"
                          draggable={false}
                          src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold">Robiul Islam</h5>
                      <p className="text-gray-500">Come on the party</p>
                    </div>
                  </div>
                  {/* single message end */}
                </div>
                {/* messages end */}
              </div>
            </div>
          </div>
          {/* messages card end */}
          {/* friend request card start */}
          <div className="mt-5 pb-5">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-xl">Friend Reqestes</h3>
              <h6 className="mt-2">See All</h6>
            </div>

            {/* single friends request card start */}
            <div className="card shadow mt-2">
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center mb-2">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Abdullah</h5>
                    <p className="text-gray-500">5 mutual friends</p>
                    <div>
                      <button className="btn btn-sm rounded-full mr-2 btn-primary">
                        Accept
                      </button>
                      <button className="uppercase btn btn-ghost font-semibold btn-sm rounded-full hover:bg-red-700  bg-red-600 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single friends request card end */}
            {/* single friends request card start */}
            <div className="card shadow mt-2">
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center mb-2">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Abdullah</h5>
                    <p className="text-gray-500">5 mutual friends</p>
                    <div>
                      <button className="btn btn-sm rounded-full mr-2 btn-primary">
                        Accept
                      </button>
                      <button className="uppercase btn btn-ghost font-semibold btn-sm rounded-full hover:bg-red-700  bg-red-600 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single friends request card end */}
            {/* single friends request card start */}
            <div className="card shadow mt-2">
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center mb-2">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Abdullah</h5>
                    <p className="text-gray-500">5 mutual friends</p>
                    <div>
                      <button className="btn btn-sm rounded-full mr-2 btn-primary">
                        Accept
                      </button>
                      <button className="uppercase btn btn-ghost font-semibold btn-sm rounded-full hover:bg-red-700  bg-red-600 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single friends request card end */}
            {/* single friends request card start */}
            <div className="card shadow mt-2">
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center mb-2">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/LS3rs9t/320227336-554443479588388-3782794624352602751-n.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Abdullah</h5>
                    <p className="text-gray-500">5 mutual friends</p>
                    <div>
                      <button className="btn btn-sm rounded-full mr-2 btn-primary">
                        Accept
                      </button>
                      <button className="uppercase btn btn-ghost font-semibold btn-sm rounded-full hover:bg-red-700  bg-red-600 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single friends request card end */}
          </div>

          {/* friend request card end */}
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
