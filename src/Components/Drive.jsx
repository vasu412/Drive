import { useState } from "react";
import Data from "./Data";
import Data2 from "./Data2";
import { useDispatch, useSelector } from "react-redux";
import FileType from "./FileType";
import Options from "./options";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { filter } from "../config/slices";
import DriveFilters from "./driveFilters";

const Drive = () => {
  const [file, setFile] = useState(true);
  const [file2, setFile2] = useState(true);
  const [folders, setFolders] = useState(false);
  const [select, setSelect] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const driveData = useSelector((store) => store.states.stateVal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = driveData.filter((x) => {
      return x.name.toLowerCase().includes(e.target[0].value.toLowerCase());
    });
    dispatch(filter([...filteredData]));
    navigate("/home/search");
  };

  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-gr text-[25px] my-[20px]">Welcome to Drive</h1>
          <DriveFilters handleSubmit={handleSubmit} />
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
              <div className="flex items-center text-start text-[14px] border-[#dadce0] border-0  border-b-[1px] border-solid">
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
              <div className=" overflow-scroll h-[400px]">
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
            </div>
          ) : (
            <div className="pl-[20px] pt-[6px] pr-[12px]">
              <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">Files</h1>
              <div className="flex flex-wrap gap-[17px] overflow-scroll h-[400px]">
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
