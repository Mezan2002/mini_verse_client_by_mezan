import React from "react";

const RightSideMenu = () => {
  return (
    <div className="px-5">
      <div>
        {/* messages card start */}
        <div className="card shadow-xl">
          <div className="card-body">
            {/* right side topbar start */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-xl">Messages</h3>
              <img
                src="https://i.ibb.co/Psk8TjS/edit.png"
                alt=""
                className="w-7"
              />
            </div>
            {/* right side topbar end */}
            <div>
              {/* message search field start */}
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
              {/* message search field end */}
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
                <div className="flex items-center mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Mehedi Hasan</h5>
                    <p className="text-gray-500">Pick the call.</p>
                  </div>
                </div>
                {/* single message end */}
                {/* single message start */}
                <div className="flex items-center mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Muhit Khan</h5>
                    <p className="text-gray-500">Hey, Please Join Us.</p>
                  </div>
                </div>
                {/* single message end */}
                {/* single message start */}
                <div className="flex items-center mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Mukit Khan</h5>
                    <p className="text-gray-500">Go to our home.</p>
                  </div>
                </div>
                {/* single message end */}
                {/* single message start */}
                <div className="flex items-center mb-6">
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
                {/* single message start */}
                <div className="flex items-center mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
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
        <div className="mt-2">
          <div className="card shadow-xl">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-xl">Friend Reqestes</h3>
                <h6 className="mt-2">See All</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
