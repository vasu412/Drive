import { useDispatch, useSelector } from "react-redux";
import docs from "/assets/doc.svg";
import pic from "/assets/pic.svg";
import movie from "/assets/movie.svg";
import pdf from "/assets/pdf.svg";
import { addOption } from "../config/slices";
import { useState } from "react";

const Data3 = ({ x, show, setShowIndex, setSelect, idx }) => {
  const profile = useSelector((store) => store.profile.profileVal);
  const [star, setStar] = useState(x.isStarred);

  const dispatch = useDispatch();
  let type =
    x.type.split("/")[0] == "image"
      ? pic
      : x.type.split("/")[0] == "video"
      ? movie
      : x.type.split("/")[0] == "text"
      ? docs
      : pdf;
  return (
    <div
      className="flex items-center text-start text-[14px] h-[48px] border-[#dadce0] hover:bg-slate-100 border-0 border-b border-solid cursor-pointer"
      key={x.id}
      onClick={() => {
        setShowIndex(idx);
        setSelect(true);
        dispatch(addOption({ ...x }));
      }}
      style={{ backgroundColor: show ? "#c2e7ff" : "" }}>
      <div className="w-[56px]  flex items-center justify-center">
        <img src={type} alt="" className="w-[22px] h-[22px]" />
      </div>
      <div className="w-[461px] pr-[6px] flex items-center ">
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">
          {x.name}
        </p>
        {star && (
          <img src="/assets/st.png" alt="" className="h-[16px] ml-[10px]" />
        )}
      </div>
      <div className="w-[140px]  px-[6px] flex text-[#444746] text-[13px]">
        <img
          src={profile.photoURL}
          className="rounded-full h-[24px] w-[24px] mr-[8px]"
          alt=""
        />
        me
      </div>
      <div className="w-[144px] text-[#444746] text-[13px] px-[6px]">
        {x.lastModified}
      </div>
      <div className="w-[88px] text-[#444746]  text-[13px] px-[6px]">
        {x.size}
      </div>
      <div className="w-[140px] text-[#444746]  text-[13px] px-[6px] flex items-center">
        <img
          src="/assets/gd.png"
          alt=""
          className="h-[18px] w-[18px] mx-[8px]"
        />
        My Drive
      </div>
      <div className=" w-[57px] flex items-center justify-end  hover:bg-slate-200 rounded-full  transition-all delay-75">
        <i className="material-symbols-outlined text-[18px] ">more_vert</i>
      </div>
    </div>
  );
};

export default Data3;
