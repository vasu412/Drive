const FileOrFolder = ({ file2, setFile2 }) => {
  return (
    <>
      <div className="border-[#202124] border border-solid w-[110px] h-[30px] rounded-3xl flex cursor-pointer float-right absolute right-[80px] top-[80px]">
        <div
          className="flex items-center w-[55px] justify-center rounded-l-2xl"
          style={{ backgroundColor: file2 ? "#c2e7ff" : "transparent" }}
          onClick={() => setFile2(true)}>
          {file2 && (
            <i className="material-symbols-outlined text-[18px]">check</i>
          )}
          <i className="material-symbols-outlined text-[21px]">menu</i>
        </div>
        <div className="h-full  border-[#202124] border-0 border-r border-solid"></div>
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
    </>
  );
};

export default FileOrFolder;
