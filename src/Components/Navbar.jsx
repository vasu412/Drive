import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#f0f4f9] shadow h-[100vh] w-full">
        <div className="flex px-[25px] items-center justify-between h-[60px]">
          <div className="flex items-center">
            <img src="/assets/google-drive.png" alt="" className="h-[40px]" />
            <h1 className="font-gr text-[21px] ml-[8px] text-[#202124]">
              Drive
            </h1>
          </div>
          <div className="relative mr-[180px]">
            <input
              type="text"
              className="h-[47px] w-[720px] rounded-3xl font-gr text-[#202124] pl-[50px] bg-slate-200"
              placeholder="Search in Drive"
            />
            <i className="material-icons absolute left-[17px] top-[13px] ">
              search
            </i>
            <i className="material-icons absolute right-[17px] top-[13px] ">
              tune
            </i>
          </div>
          <div className="flex items-center justify-between w-[130px]">
            <div className="h-[40px] w-[60px] flex items-center justify-center hover:bg-slate-200 rounded-full">
              <img src="/assets/q.png" alt="Support" className="h-[22px]" />
            </div>
            <div className="h-[40px] w-[60px] flex items-center justify-center  hover:bg-slate-200 rounded-full">
              <img
                src="/assets/setting1.png"
                alt="Setting"
                className="h-[22px]"
              />
            </div>
            <div className="h-[40px] w-[60px] flex items-center justify-center  hover:bg-slate-200 rounded-full">
              <i className="material-icons ">account_circle</i>
            </div>
          </div>
        </div>
        {/* Left Sec */}

        <div className="float-left w-[250px]  flex flex-col justify-center items-start px-[12px] pt-[10px]">
          <div>
            <button className="w-[105px] bg-[#fff] text-[15px] flex items-center justify-center  shadow-md rounded-2xl py-[2.5px]">
              <span className="text-[30px] font-[300] mb-[4px]">+</span>
              <span className="ml-[13px] text-[14px]">New</span>
            </button>
          </div>
          <div className="mt-[20px]">
            <div>
              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer bg-[#c2e7ff]">
                <img
                  src="/assets/homepage.png"
                  alt=""
                  className="h-[18px] w-[16px] mr-[10px]"
                />
                <p className="font-[300] text-[14px]">Home</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/gd.png"
                  alt=""
                  className="h-[18px] w-[18px] mr-[8px]"
                />
                <p className="font-[300] text-[14px]">My Drive</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <i className="material-icons text-[19px] mr-[8px]">devices</i>
                <p className="font-[300] text-[14px]">Computers</p>
              </div>

              <br />

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/group.png"
                  alt=""
                  className="h-[18px] w-[20px] mr-[7px]"
                />
                <p className="font-[300] text-[14px]">Shared with me</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <i className="material-icons text-[19px] mr-[8px]">schedule</i>
                <p className="font-[300] text-[14px]">Recent</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/favorite.png"
                  alt=""
                  className="h-[15px] w-[16px] mr-[11px]"
                />
                <p className="font-[300] text-[14px]">Starred</p>
              </div>

              <br />

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/spam.png"
                  alt=""
                  className="h-[15px] w-[16px] mr-[7px]"
                />
                <p className="font-[300] text-[14px]">Spam</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/trash-can.png"
                  alt=""
                  className="h-[15px] w-[16px] mr-[7px]"
                />
                <p className="font-[300] text-[14px]">Trash</p>
              </div>

              <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
                <img
                  src="/assets/c.png"
                  alt=""
                  className="h-[18px] w-[18px] mr-[7px]"
                />
                <p className="font-[300] text-[14px]">Storage</p>
              </div>
              {/* 
              <i className="material-icons">group</i>
              <i className="material-icons">grade</i>
              
              <i className="material-icons">cloud</i>
              <i className="material-icons">delete</i> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
