import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Data3 from "./data3";
import Data2 from "./Data2";
import Options from "./options";
import FileOrFolder from "./fileorfolder";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const Trash = () => {
  const [file2, setFile2] = useState(true);
  const [data, setData] = useState("");
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const state = useSelector((store) => store.simpleState.count);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

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
  async function get() {
    const data = await getDocs(trashData);
    const filteredData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    setData([...filteredData]);
  }

  const emptyTrash = async () => {
    for (const item of data) {
      try {
        await deleteDoc(doc(trashData, item.id));
      } catch (error) {
        console.error(`Failed to delete document with ID: ${item.id}`, error);
      }
    }
    get();
  };

  useEffect(() => {
    userId && get();
  }, [userId, state]);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Trash
      </h1>

      <FileOrFolder file2={file2} setFile2={setFile2} />

      {!select ? (
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
      ) : (
        <div className="ml-[15px]">
          <Options
            setSelect={setSelect}
            setShowIndex={setShowIndex}
            trashedData={true}
            setMessage={setMessage}
            setShowNotification={setShowNotification}
          />
        </div>
      )}

      <div className="ml-[20px] mr-[7px] mt-[14px] px-[15px] py-[13px]  text-[13px] text-[#3c4043] bg-[#e3e5e6] rounded-lg justify-between flex relative">
        <p>Items in trash will be deleted forever after 30 days</p>
        <div
          className="cursor-pointer w-[100px] h-[30px] flex justify-center items-center text-center absolute  right-[10px] top-[7px] rounded-3xl hover:bg-[#c7c7c8]"
          onClick={emptyTrash}>
          <p>Empty Trash</p>
        </div>
      </div>

      {data === "" || data.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://ssl.gstatic.com/docs/doclist/images/empty_state_trash_v4.svg"
            alt=""
            className="h-[200px] w-[200px] mt-[140px]"
          />
          <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
            Nothing in trash
          </h1>
          <p className="font-[300] mx-[300px] text-center">
            Move items you don't need to trash. Items in trash will be deleted
            forever after 30 days.{" "}
          </p>
          <a
            href="https://support.google.com/drive/answer/2375057?visit_id=638536361769983493-3865912668&p=swm_ww_new&rd=1"
            className="text-[#1a73e8] mt-[10px]">
            Learn More
          </a>
        </div>
      ) : file2 ? (
        <div className="flex flex-col mt-[18px] w-full pl-[20px] pr-[12px]">
          <div className="flex items-center text-start text-[14px] border-[#dadce0] border-0  border-b-[1px] border-solid">
            <div className="w-[517px] h-[30px] pr-[6px] ">Name</div>
            <div className="w-[140px] h-[30px] px-[6px]">Owner</div>
            <div className="w-[144px] h-[30px] px-[6px]">Last Modified</div>
            <div className="w-[92px] h-[30px] px-[6px]">File Size</div>
            <div className="w-[140px] h-[30px] px-[6px]">Location</div>
            <div className="w-[60px] h-[30px] px-[6px] mr-[6px] text-end">
              <i className="material-symbols-outlined text-[18px]">more_vert</i>
            </div>
          </div>
          <div className=" overflow-scroll h-[510px]">
            {data.map((x, idx) => (
              <Data3
                x={x}
                key={x.id}
                idx={idx}
                show={idx === showIndex ? true : false}
                setShowIndex={setShowIndex}
                setSelect={setSelect}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="pl-[20px] pt-[6px] pr-[12px]">
          <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">Files</h1>
          <div className="flex flex-wrap gap-[17px] overflow-scroll h-[550px]">
            {data.map((x, idx) => (
              <Data2
                x={x}
                key={x.id}
                show={idx === showIndex ? true : false}
                setShowIndex={setShowIndex}
                setSelect={setSelect}
                idx={idx}
              />
            ))}
          </div>
        </div>
      )}
      {showNotification && (
        <Notification
          message={message}
          setShowNotification={setShowNotification}
          showNotification={showNotification}
        />
      )}
    </>
  );
};
export default Trash;
