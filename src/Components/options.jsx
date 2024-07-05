import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { add } from "../config/slices";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Options = ({
  setSelect,
  setShowIndex,
  setShowNotification,
  setMessage,
  trashedData,
}) => {
  const data = useSelector((store) => store.option.profileVal);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const trashData = userId && collection(db, "trashof" + userId);
  const driveData = userId && collection(db, userId);

  console.log(trashedData);
  async function trash() {
    !trashedData
      ? await addDoc(trashData, data)
      : await deleteDoc(doc(trashData, data.id));
    await deleteDoc(doc(driveData, data.id));
    dispatch(add(1));
    setSelect(false);
    setMessage("File moved to trash");
    setShowNotification(true);
  }

  return (
    <div className="bg-[#f0f4f9] my-[4px] h-[40px] w-[1100px] flex items-center rounded-3xl px-[5px] text-[#444746] gap-[9px]">
      <div
        className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer"
        onClick={() => {
          setSelect(false);
          setShowIndex(null);
        }}>
        <i className="material-symbols-outlined text-[20px] ">close</i>
      </div>
      <p className="text-[14px] mx-[7px]">1 selected</p>
      <div
        className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer"
        // onClick={() => shareFile(data.url, data.name, data.type)}
      >
        <i className="material-symbols-outlined text-[20px] ">person_add</i>
      </div>
      <a href={data.url} download={data.name}>
        <div className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer">
          <i className="material-symbols-outlined text-[20px] ">open_in_new</i>
        </div>
      </a>
      <div
        className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer"
        onClick={trash}>
        <i className="material-symbols-outlined text-[20px] ">delete</i>
      </div>
      <div
        className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer"
        onClick={() => {
          setMessage("Link copied");
          setShowNotification(true);
          navigator.clipboard.writeText(data.url);
        }}>
        <i className="material-symbols-outlined text-[20px] ">link</i>
      </div>
      <div className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer">
        <i className="material-symbols-outlined text-[20px] ">more_vert</i>
      </div>
    </div>
  );
};

export default Options;
