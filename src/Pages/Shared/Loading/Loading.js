import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white bg-black"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white bg-black"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white bg-black"></div>
      </div>
    </div>
  );
};

export default Loading;
