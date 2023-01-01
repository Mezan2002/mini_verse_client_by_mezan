import React from "react";
import Feeds from "../Feeds/Feeds";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import RightSideMenu from "../RightSideMenu/RightSideMenu";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <LeftSideMenu></LeftSideMenu>
        </div>
        <div class="col-span-2 mx-20">
          <Feeds></Feeds>
        </div>
        <div>
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default Home;
