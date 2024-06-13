import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Data3 from "./data3";
import Data2 from "./Data2";
import Options from "./options";

const Trash = () => {
  const [file2, setFile2] = useState(true);
  const [data, setData] = useState("");
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const trashData = collection(db, "trash");
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
    get();
  }, []);

  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[17px] pb-[6px]">
        Trash
      </h1>

      <div className="border-[#202124] border w-[110px] h-[30px] rounded-3xl flex cursor-pointer float-right absolute right-[80px] top-[80px]">
        <div
          className="flex items-center w-[55px] justify-center rounded-l-2xl"
          style={{ backgroundColor: file2 ? "#c2e7ff" : "transparent" }}
          onClick={() => setFile2(true)}>
          {file2 && (
            <i className="material-symbols-outlined text-[18px]">check</i>
          )}
          <i className="material-symbols-outlined text-[21px]">menu</i>
        </div>
        <div className="h-full  border-[#202124] border-r"></div>
        <div
          className="flex items-center w-[55px] justify-center rounded-r-2xl"
          style={{ backgroundColor: file2 ? "transparent" : "#c2e7ff" }}
          onClick={() => setFile2(false)}>
          {file2 ? (
            ""
          ) : (
            <i className="material-symbols-outlined text-[18px]">check</i>
          )}
          <i className="material-symbols-outlined text-[18px]">view_cozy</i>
        </div>
      </div>

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
          <div className="flex items-center text-start text-[14px] border-[#dadce0]  border-b">
            <div className="w-[517px] h-[30px] pr-[6px] ">Name</div>
            <div className="w-[140px] h-[30px] px-[6px]">Owner</div>
            <div className="w-[144px] h-[30px] px-[6px]">Last Modified</div>
            <div className="w-[92px] h-[30px] px-[6px]">File Size</div>
            <div className="w-[140px] h-[30px] px-[6px]">Location</div>
            <div className="w-[60px] h-[30px] px-[6px] mr-[6px] text-end">
              <i className="material-symbols-outlined text-[18px]">more_vert</i>
            </div>
          </div>
          {data.map((x, idx) => (
            <Data3 x={x} key={x.id} idx={idx} />
          ))}
        </div>
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
export default Trash;
