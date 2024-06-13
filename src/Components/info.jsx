const Info = ({ day, fileName, loading, type, setOpen }) => {
  return (
    <div
      className="w-[360px]  absolute bottom-0 right-[25px] shadow-xl border rounded-t-2xl"
      style={{
        backgroundColor: day ? "#f8fafd" : "#1b1b1b",
        color: day ? "black" : "#fff",
        border: day ? "#fff" : "#1b1b1b",
      }}>
      <div className="w-full h-[54px] flex items-center justify-between">
        <p className="pl-[17px] font-gr">
          {loading ? "Uploading Item" : "Upload Complete"}
        </p>
        <div
          className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 mr-[4px] cursor-pointer"
          onClick={() => setOpen(false)}>
          <i className="material-symbols-outlined text-[22px] ">close</i>
        </div>
      </div>
      <div
        className="h-[51px] flex items-center justify-between bg-white"
        style={{
          backgroundColor: day ? "#fff" : "#131314",
          color: day ? "black" : "#e3e3e3",
        }}>
        <div className="mr-[25px] flex items-center">
          <img src={type} alt="" className="w-[20px] h-[20px] ml-[16px]" />
          <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[120px] py-[10px] px-[12px] text-[14px]">
            {fileName}
          </div>
        </div>
        <div className="mr-[10px]">
          {loading ? (
            <img
              src="/assets/circular-arrows.png"
              alt=""
              className="animate-spin h-[20px]"
            />
          ) : (
            <img src="/assets/accept.png" alt="" className="h-[20px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
