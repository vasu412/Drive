import { useState } from "react";
const Recent = () => {
  const [file2, setFile2] = useState(true);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Recent
      </h1>

      <div className="border-[#202124] border w-[110px] h-[30px] rounded-3xl flex cursor-pointer float-right absolute right-[80px] top-[80px]">
        <div
          className="flex items-center w-[55px] justify-center rounded-l-2xl"
          style={{ backgroundColor: file2 ? "#c2e7ff" : "transparent" }}
          onClick={() => setFile2(true)}>
          {file2 && (
            <i className="material-symbols-outlined text-[18px]">check</i>
          )}
          <i className="material-symbols-outlined text-[21px]">menu</i>
        </div>
        <div className="h-full  border-[#202124] border-r"></div>
        <div
          className="flex items-center w-[55px] justify-center rounded-r-2xl"
          style={{ backgroundColor: file2 ? "transparent" : "#c2e7ff" }}
          onClick={() => setFile2(false)}>
          {file2 ? (
            ""
          ) : (
            <i className="material-symbols-outlined text-[18px]">check</i>
          )}
          <i className="material-symbols-outlined text-[18px]">view_cozy</i>
        </div>
      </div>

      <div className="ml-[20px] mt-[10px]">
        <button className=" text-black py-[4px] pl-[19px] pr-[34px] rounded-md mr-[16px] border border-[#202124] text-[14px] relative font-gr hover:bg-slate-100">
          Type
          <i className=" material-icons absolute right-[15px] top-[2px] ml-[8px]">
            arrow_drop_down
          </i>
        </button>

        <button className="text-black py-[4px] pl-[19px] pr-[34px] rounded-md mr-[16px] border border-[#202124] text-[14px] relative font-gr hover:bg-slate-100">
          Modified
          <i className=" material-icons h-[20px] w-[20px] absolute right-[15px] top-[2px] ml-[8px]">
            arrow_drop_down
          </i>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_recents_v4.svg"
          alt=""
          className="h-[200px] w-[200px] mt-[140px]"
        />
        <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
          No recent files
        </h1>
        <p className="font-[300] mx-[300px] text-center">
          See all the files you’ve recently edited or opened.{" "}
        </p>
      </div>
    </>
  );
};
export default Recent;
