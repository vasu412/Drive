const DriveFilters = ({ handleSubmit }) => {
  return (
    <>
      <div className="relative">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-[52px] w-[830px] rounded-3xl font-gr text-[#202124] pl-[50px] bg-slate-100 placeholder-black outline-none"
            placeholder="Search in Drive"
          />
          <i className="material-icons absolute left-[17px] top-[14px] ">
            search
          </i>
        </form>
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
    </>
  );
};

export default DriveFilters;
