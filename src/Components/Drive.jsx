import { useState } from "react";
import Data from "./Data";
import Data2 from "./Data2";
import { useSelector } from "react-redux";
import FileType from "./FileType";
import Options from "./options";
import Notification from "./Notification";

const Drive = () => {
  const [file, setFile] = useState(true);
  const [file2, setFile2] = useState(true);
  const [folders, setFolders] = useState(false);
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const driveData = useSelector((store) => store.states.stateVal);

  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-gr text-[25px] my-[20px]">Welcome to Drive</h1>
          <div className="relative">
            <input
              type="text"
              className="h-[52px] w-[830px] rounded-3xl font-gr text-[#202124] pl-[50px] bg-slate-100 placeholder-black outline-none"
              placeholder="Search in Drive"
            />
            <i className="material-icons absolute left-[17px] top-[14px] ">
              search
            </i>
          </div>
          <div className="flex items-center my-[20px]">
            <button className=" bg-slate-100 text-black py-[7px] px-[45px] pr-[38px] rounded-2xl mr-[16px]  text-[14px] relative font-gr hover:bg-slate-200">
              <i className="material-symbols-outlined text-[20px] absolute left-[15px] top-[7px] mr-[12px]">
                description
              </i>
              Type
              <i className=" material-icons h-[20px] w-[20px] absolute right-[15px] top-[5px] ml-[8px]">
                arrow_drop_down
              </i>
            </button>

            <button className=" bg-slate-100 text-black py-[7px] px-[45px] pr-[38px] rounded-2xl mr-[16px]  text-[14px] relative font-gr hover:bg-slate-200">
              <i className="material-symbols-outlined text-[20px] absolute left-[15px] top-[7px] mr-[12px]">
                person
              </i>
              People
              <i className=" material-icons h-[20px] w-[20px] absolute right-[15px] top-[5px] ml-[8px]">
                arrow_drop_down
              </i>
            </button>

            <button className=" bg-slate-100 text-black py-[7px] px-[45px] pr-[38px] rounded-2xl mr-[16px]  text-[14px] relative font-gr hover:bg-slate-200">
              <i className="material-symbols-outlined text-[20px] absolute left-[15px] top-[7px] mr-[12px]">
                padding
              </i>
              Modified
              <i className=" material-icons h-[20px] w-[20px] absolute right-[15px] top-[5px] ml-[8px]">
                arrow_drop_down
              </i>
            </button>

            <button className=" bg-slate-100 text-black py-[7px] px-[45px] pr-[38px] rounded-2xl mr-[16px]  text-[14px] relative font-gr hover:bg-slate-200">
              <i className="material-symbols-outlined text-[20px] absolute left-[15px] top-[7px] mr-[12px]">
                folder
              </i>
              Location
              <i className=" material-icons h-[20px] w-[20px] absolute right-[15px] top-[5px] ml-[8px]">
                arrow_drop_down
              </i>
            </button>
          </div>
          {!select ? (
            <FileType
              setFile={setFile}
              setFile2={setFile2}
              setFolders={setFolders}
              file={file}
              file2={file2}
            />
          ) : (
            <Options
              setSelect={setSelect}
              setShowIndex={setShowIndex}
              setMessage={setMessage}
              setShowNotification={setShowNotification}
            />
          )}
          {driveData.length === 0 || (!file && folders) ? (
            <div className="flex flex-col items-center">
              <img
                src="https://ssl.gstatic.com/docs/doclist/images/empty_state_home.svg"
                alt=""
                className="h-[200px] w-[200px] mt-[90px]"
              />
              <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
                Welcome to Drive, the home for all your files
              </h1>
              <p className="font-[300]">
                Drag your files and folders here or use the “New” button to
                upload
              </p>
            </div>
          ) : file2 ? (
            <div className="flex flex-col mt-[18px] w-full pl-[20px] pr-[12px]">
              <div className="flex items-center text-start text-[14px] border-[#dadce0]  border-b">
                <div className="w-[382px] h-[30px] pr-[6px] ">Name</div>
                <div className="w-[215px] h-[30px] px-[6px]">Owner</div>
                <div className="w-[200px] h-[30px] px-[6px]">Last Modified</div>
                <div className="w-[82px] h-[30px] px-[6px]">File Size</div>
                <div className="w-[204px] h-[30px] px-[6px] mr-[6px] text-end">
                  <i className="material-symbols-outlined text-[18px]">
                    more_vert
                  </i>
                </div>
              </div>
              {driveData.map((x, idx) => (
                <Data
                  x={x}
                  key={x.id}
                  show={idx === showIndex ? true : false}
                  setShowIndex={setShowIndex}
                  setSelect={setSelect}
                  idx={idx}
                  setMessage={setMessage}
                  setShowNotification={setShowNotification}
                />
              ))}
            </div>
          ) : (
            <div className="pl-[20px] pt-[6px] pr-[12px]">
              <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">Files</h1>
              <div className="flex flex-wrap gap-[17px]">
                {driveData.map((x, idx) => (
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
        </div>
      </div>
    </>
  );
};

export default Drive;
