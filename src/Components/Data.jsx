import { useDispatch, useSelector } from "react-redux";
import docs from "/assets/doc.svg";
import pic from "/assets/pic.svg";
import movie from "/assets/movie.svg";
import pdf from "/assets/pdf.svg";
import { useState } from "react";
import { addOption } from "../config/slices";
import { db } from "../config/firebase";
import { setDoc } from "firebase/firestore";
import { collection, doc } from "firebase/firestore";

const Data = ({ x, show, setShowIndex, setSelect, idx }) => {
  const profile = useSelector((store) => store.profile.profileVal);
  const [funcs, setFuncs] = useState(false);
  const [star, setStar] = useState(x.isStarred);

  const driveData = collection(db, "driveData");
  const driveDocRef = doc(driveData, x.id);

  async function send() {
    await setDoc(driveDocRef, { isStarred: true }, { merge: true });
    setStar(true);
  }

  async function remove() {
    await setDoc(driveDocRef, { isStarred: false }, { merge: true });
    setStar(false);
  }

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
      className="flex items-center text-start text-[14px] h-[48px] border-[#dadce0] hover:bg-slate-100 border-b cursor-pointer"
      key={x.id}
      onMouseOver={() => setFuncs(true)}
      onMouseLeave={() => setFuncs(false)}
      onClick={() => {
        setShowIndex(idx);
        setSelect(true);
        dispatch(addOption({ ...x }));
      }}
      style={{ backgroundColor: show ? "#c2e7ff" : "" }}>
      <div className="w-[56px]  flex items-center justify-center">
        <img src={type} alt="" className="w-[22px] h-[22px]" />
      </div>
      <div className="w-[326px]  pr-[6px] flex items-center ">
        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[280px]">
          {x.name}
        </p>
        {star && <img src="/assets/st.png" alt="" className="h-[16px]" />}
      </div>
      <div className="w-[215px]  px-[6px] flex text-[#444746] text-[13px]">
        <img
          src={profile.photoURL}
          className="rounded-full h-[24px] w-[24px] mr-[8px]"
          alt=""
        />
        me
      </div>
      <div className="w-[200px] text-[#444746] text-[13px] px-[6px]">
        {x.lastModified}
      </div>
      <div className="w-[82px] text-[#444746]  text-[13px] px-[6px]">
        {x.size}
      </div>
      <div className="w-[217px]  px-[6px] mr-[6px] text-end cursor-pointer flex justify-end items-end text-[#444746] ">
        {funcs && (
          <>
            <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
              <i className="material-symbols-outlined text-[18px] " alt="share">
                person_add
              </i>
            </div>
            <a href={x.url} target="blank">
              <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
                <i className="material-symbols-outlined text-[18px] ">
                  open_in_new
                </i>
              </div>
            </a>
            <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75">
              <i className="material-symbols-outlined text-[18px] ">edit</i>
            </div>
            <div
              className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75"
              onClick={() => {
                star ? remove() : send();
              }}>
              {star ? (
                <img src="/assets/st.png" alt="" className="h-[18px]" />
              ) : (
                <i className="material-symbols-outlined text-[18px] ">star</i>
              )}
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
