import { useState } from "react";
import FileOrFolder from "./fileorfolder";
const Shared = () => {
  const [file2, setFile2] = useState(true);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Shared with me
      </h1>

      <FileOrFolder file2={file2} setFile2={setFile2} />

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
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_shared_with_me.svg"
          alt=""
          className="h-[200px] w-[200px] mt-[140px]"
        />
        <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
          Nothing has been shared with you yet
        </h1>
        <p className="font-[300] mx-[300px] text-center">
          See all the items shared with you in one place .{" "}
          <a
            href="https://support.google.com/drive/answer/2375057?visit_id=638536361769983493-3865912668&p=swm_ww_new&rd=1"
            className="text-[#1a73e8]">
            Learn More
          </a>
        </p>
      </div>
    </>
  );
};
export default Shared;
