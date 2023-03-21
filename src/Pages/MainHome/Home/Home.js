import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../../../Redux/ActionCreator/ActionCreator";
import Feeds from "../Feeds/Feeds/Feeds";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import RightSideMenu from "../RightSideMenu/RightSideMenu";

const Home = () => {
  const {
    data: posts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    },
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  /*  useEffect(() => {
    dispatch(loggedInUser());
  }, [dispatch]); */

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 my-5">
        <div>
          <LeftSideMenu></LeftSideMenu>
        </div>
        <div className="col-span-2 mx-10">
          <Feeds posts={posts} refetch={refetch} isLoading={isLoading}></Feeds>
        </div>
        <div>
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default Home;
