import React, { useEffect, useState } from "react";
import NewPost from "../NewPost/NewPost";
import PostCardBottom from "../PostCardBottom/PostCardBottom";
import PostCardDropDown from "../PostCardDropDown/PostCardDropDown";
import PostCardTop from "../PostCardTop/PostCardTop";
import StoryCard from "../StoryCard/StoryCard";

const Feeds = ({ refetch, posts }) => {
  // const posts = useSelector((state) => state?.postReducer?.allPosts[0]);
  const [modalToggle, setModalToggle] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      {/* feeds start */}
      {/* stories card start */}
      <StoryCard></StoryCard>
      {/* stories card end */}

      {/* new post section start */}

      <NewPost
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        refetch={refetch}
      ></NewPost>

      {/* new post section end */}

      {/* posts section start */}
      {/* single post card start */}
      {posts?.map((post) => (
        <div key={post._id} className="card mt-5 bg-white shadow">
          <div className="flex justify-between px-5 pt-5 pb-3">
            {/* post card top start */}

            <PostCardTop post={post}></PostCardTop>

            {/* post card top end */}
            <div>
              {/* post card dropdown start */}

              <PostCardDropDown
                post={post}
                refetch={refetch}
              ></PostCardDropDown>

              {/* post card dropdown end */}
            </div>
          </div>
          <div className="py-2">
            {post.postedImage && post.postedText ? (
              <h2 className="2xl:pl-8 px-4 text-lg mb-5">
                {" "}
                {post?.postedText.length > 150
                  ? post?.postedText.slice(0, 150) + "..."
                  : post?.postedText}
              </h2>
            ) : (
              <h2 className="pl-6 mb-5 text-4xl">{post?.postedText}</h2>
            )}
          </div>
          {post.postedImage && (
            <figure>
              <img
                draggable={false}
                src={post?.postedImage}
                alt={`${post.postedText}`}
                className="2xl:max-h-[700px] 2xl:max-w-[800px] rounded-xl lg:max-w-[500px] lg:max-h-[500px]"
              />
            </figure>
          )}

          {/* post card bottom start */}

          <PostCardBottom post={post} refetch={refetch}></PostCardBottom>

          {/* post card bottom end */}
        </div>
      ))}
      {/* single post card end */}
      {/* posts section end */}
      {/* feeds end */}
    </div>
  );
};

export default Feeds;
