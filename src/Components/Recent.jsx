import { useEffect, useState } from "react";
import Options from "./options";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import FileOrFolder from "./fileorfolder";
import RecentData from "./RecentData";
import RecentData2 from "./RecentData2";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const Recent = () => {
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

  const driveData = userId && collection(db, userId);
  async function getData() {
    const data = await getDocs(driveData);
    const filteredData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    setData([...filteredData]);
  }

  useEffect(() => {
    userId && getData();
  }, [userId, state]);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Recent
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
      ) : file2 ? (
        <RecentData
          data={data}
          setShowIndex={setShowIndex}
          setSelect={setSelect}
          showIndex={showIndex}
        />
      ) : (
        <RecentData2
          data={data}
          setShowIndex={setShowIndex}
          setSelect={setSelect}
          showIndex={showIndex}
        />
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
export default Recent;
