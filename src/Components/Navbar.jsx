import React from "react";
import NavLeft from "./NavLeft";
import Drive from "./Drive";
import { Outlet } from "react-router-dom";

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
              className="h-[47px] w-[720px] rounded-3xl font-gr text-[#202124] pl-[50px] bg-slate-200 placeholder-black"
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

        <NavLeft />
        <div className="float-right bg-white w-[78.5vw] h-[91vh] rounded-2xl mr-[55px]">
          <Outlet />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
