import { useEffect, useState } from "react";
import Options from "./options";
import Data4 from "./data4";
import Data2 from "./Data2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import FileOrFolder from "./fileorfolder";
import RecentData from "./RecentData";
import Shimmer from "./shimmer";

const Recent = () => {
  const [file2, setFile2] = useState(true);
  const [data, setData] = useState("");
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const driveData = collection(db, "driveData");
  async function getData() {
    const data = await getDocs(driveData);
    const filteredData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    setData([...filteredData]);
  }

  useEffect(() => {
    getData();
  }, []);

  if (data == "") return <Shimmer />;
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
          <Options setSelect={setSelect} setShowIndex={setShowIndex} />
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
        <div className="pl-[20px] pt-[6px] pr-[12px]">
          <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">Files</h1>
          <div className="flex flex-wrap gap-[17px]">
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
    </>
  );
};
export default Recent;
