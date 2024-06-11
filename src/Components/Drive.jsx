import { useState } from "react";
import Data from "./Data";

const Drive = () => {
  const [file, setFile] = useState(true);
  const [file2, setFile2] = useState(true);

  const driveData = useSelector((store) => store.states.stateVal);

  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-gr text-[25px] my-[20px]">Welcome to Drive</h1>
          <div className="relative">
            <input
              type="text"
              className="h-[52px] w-[830px] rounded-3xl font-gr text-[#202124] pl-[50px] bg-slate-100 placeholder-black"
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
          <div className="flex justify-between w-full mt-[17px] px-[20px]">
            <div className="flex items-center">
              <h1 className="mr-[15px] font-gr">Suggested</h1>

              <div className="border-[#202124] border w-[195px] h-[32px] rounded-3xl flex cursor-pointer">
                <div
                  className="flex items-center justify-center px-[21px] rounded-l-3xl"
                  style={{ backgroundColor: file ? "#c2e7ff" : "transparent" }}
                  onClick={() => setFile(true)}>
                  {file ? (
                    <i className="material-symbols-outlined text-[18px] mr-[8px]">
                      check
                    </i>
                  ) : (
                    <i className="material-symbols-outlined text-[18px] mr-[8px]">
                      clarify
                    </i>
                  )}
                  <p className="text-[14px] font-gr">Files</p>
                </div>
                <div className="h-full  border-[#202124] border-r"></div>
                <div
                  className="flex items-center justify-center px-[12px] rounded-r-3xl"
                  style={{ backgroundColor: file ? "transparent" : "#c2e7ff" }}
                  onClick={() => setFile(false)}>
                  {file ? (
                    <i className="material-symbols-outlined text-[18px] mr-[8px]">
                      folder
                    </i>
                  ) : (
                    <i className="material-symbols-outlined text-[18px] mr-[8px]">
                      check
                    </i>
                  )}

                  <p className="text-[14px] font-gr">Folders</p>
                </div>
              </div>
            </div>
            <div className="border-[#202124] border w-[110px] h-[30px] rounded-3xl flex cursor-pointer">
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
                <i className="material-symbols-outlined text-[18px]">
                  view_cozy
                </i>
              </div>
            </div>
          </div>
          {driveData.length === 0 ? (
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
          ) : (
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
              {driveData.map((x) => (
                <Data x={x} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Drive;
