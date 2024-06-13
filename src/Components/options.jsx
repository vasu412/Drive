import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { add } from "../config/slices";

const trashData = collection(db, "trash");
const driveData = collection(db, "driveData");

const Options = ({
  setSelect,
  setShowIndex,
  setShowNotification,
  setMessage,
}) => {
  const data = useSelector((store) => store.option.profileVal);
  const dispatch = useDispatch();

  async function trash() {
    await addDoc(trashData, data);
    await deleteDoc(doc(driveData, data.id));
    setSelect(false);
    setMessage("File moved to trash");
    setShowNotification(true);
    dispatch(add(1));
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
      <div className="h-[32px] w-[32px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 cursor-pointer">
        <i className="material-symbols-outlined text-[20px] ">person_add</i>
      </div>
      <a href={data.url} target="blank">
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
