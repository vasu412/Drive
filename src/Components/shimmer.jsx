import React from "react";

const Shimmer = () => {
  return (
    <div className="space-y-4 animate-pulse ml-[30px] mt-[30px]">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center pb-[10px] space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-[13px] bg-gray-300 rounded-full w-[68vw]"></div>
            <div className="h-[13px] bg-gray-300 rounded-full w-[50vw]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
