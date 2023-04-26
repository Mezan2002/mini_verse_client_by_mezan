import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Feeds from "../Feeds/Feeds/Feeds";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
import { loadLoggedInUserData } from "../../../Redux/Thunk/LoadLoggedInUserData/LoadLoggedInUserData";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLoggedInUserData());
  }, [dispatch]);

  const {
    data: posts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://miniverse-server.vercel.app/posts");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 my-5">
        <div className="">
          <LeftSideMenu></LeftSideMenu>
        </div>
        <div className="col-span-2 mx-10">
          <Feeds posts={posts} refetch={refetch} isLoading={isLoading}></Feeds>
        </div>
        <div className="">
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default Home;
