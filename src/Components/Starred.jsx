import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import FileOrFolder from "./fileorfolder";
import Options from "./options";
import Data2 from "./Data2";
import Data3 from "./data3";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const Starred = () => {
  const [file2, setFile2] = useState(true);
  const [data, setData] = useState("");
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const [userId, setUserId] = useState(null);
  const state = useSelector((store) => store.simpleState.count);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

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

  const starred = userId && collection(db, userId);

  async function get() {
    const data = await getDocs(starred);
    const filteredData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    const fData = filteredData.filter((x) => x.isStarred === true);
    setData([...fData]);
  }

  useEffect(() => {
    userId && get();
  }, [userId, state]);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Starred
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
            setMessage={setMessage}
            setShowNotification={setShowNotification}
          />
        </div>
      )}
      {data === "" || data.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://ssl.gstatic.com/docs/doclist/images/empty_state_starred_files_v3.svg"
            alt=""
            className="h-[200px] w-[200px] mt-[140px]"
          />
          <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
            No starred files
          </h1>
          <p className="font-[300] mx-[300px] text-center">
            Add stars to things that you want to easily find later{" "}
          </p>
        </div>
      ) : file2 ? (
        <div className="flex flex-col mt-[26px] w-full pl-[20px] pr-[12px]">
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
          <div className=" overflow-scroll h-[550px]">
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
        <div className="pl-[20px] pt-[6px] pr-[12px] mt-[10px]">
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
export default Starred;
