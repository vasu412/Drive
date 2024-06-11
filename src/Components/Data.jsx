import { useSelector } from "react-redux";
import doc from "/assets/doc.svg";
import pic from "/assets/pic.svg";
import movie from "/assets/movie.svg";
import pdf from "/assets/pdf.svg";
import { useState } from "react";

const Data = ({ x }) => {
  // console.log(x);
  const profile = useSelector((store) => store.profile.profileVal);
  const [funcs, setFuncs] = useState(false);

  let type =
    x.type.split("/")[0] == "image"
      ? pic
      : x.type.split("/")[0] == "video"
      ? movie
      : x.type.split("/")[0] == "text"
      ? doc
      : pdf;
  return (
    <div
      className="flex items-center text-start text-[14px] h-[48px] border-[#dadce0]  border-b"
      key={x.id}>
      <div className="w-[56px]  flex items-center justify-center">
        <img src={type} alt="" className="w-[22px] h-[22px]" />
      </div>
      <div className="w-[326px]  pr-[6px] text-ellipsis overflow-hidden whitespace-nowrap">
        {x.name}
      </div>
      <div className="w-[215px]  px-[6px] flex">
        <img
          src={profile.photoURL}
          className="rounded-full h-[24px] w-[24px] mr-[8px]"
          alt=""
        />
        me
      </div>
      <div className="w-[200px]  px-[6px]">{x.lastModified.split(",")[0]}</div>
      <div className="w-[82px]  px-[6px]">{Math.ceil(x.size / 1000)}KB</div>
      <div
        className="w-[217px]  px-[6px] mr-[6px] text-end cursor-pointer flex justify-end items-end"
        onMouseOver={() => setFuncs(true)}
        onMouseLeave={() => setFuncs(false)}>
        {funcs && (
          <>
            <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
              <i className="material-symbols-outlined text-[18px] " alt="share">
                person_add
              </i>
            </div>
            <a href={x.url} download={x.name}>
              <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
                <i className="material-symbols-outlined text-[18px] ">
                  download
                </i>
              </div>
            </a>
            <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
              <i className="material-symbols-outlined text-[18px] ">edit</i>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
              <i className="material-symbols-outlined text-[18px] ">star</i>
            </div>
          </>
        )}
        <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
          <i className="material-symbols-outlined text-[18px] ">more_vert</i>
        </div>
      </div>
    </div>
  );
};

export default Data;
