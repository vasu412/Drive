const NavLeft = () => {
  return (
    <div className="float-left w-[250px]  flex flex-col justify-center items-start px-[12px] pt-[10px]">
      <div>
        <button className="w-[105px] bg-[#fff] text-[15px] flex items-center justify-center  shadow-md rounded-2xl py-[2.5px]">
          <span className="text-[30px] font-[300] mb-[4px]">+</span>
          <span className="ml-[13px] text-[14px]">New</span>
        </button>
      </div>
      <div className="mt-[20px]">
        <div>
          <div className="flex  justify-start items-center w-[220px] px-[19px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer bg-[#c2e7ff]">
            <i className="material-symbols-outlined text-[21px] mr-[8px] text-[#5f6368]">
              home
            </i>
            <p className="font-[300] text-[14px] ">Home</p>
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
            <i className="material-symbols-outlined text-[19px] mr-[8px] text-[#5f6368]">
              devices
            </i>
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
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
