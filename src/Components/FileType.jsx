const FileType = ({ setFile, setFile2, setFolders, file, file2 }) => {
  return (
    <div className="flex justify-between w-full mt-[17px] px-[20px]">
      <div className="flex items-center">
        <h1 className="mr-[15px] font-gr">Suggested</h1>

        <div className="border-[#202124] border border-solid w-[195px] h-[32px] rounded-3xl flex cursor-pointer">
          <div
            className="flex items-center justify-center px-[21px] rounded-l-3xl"
            style={{ backgroundColor: file ? "#c2e7ff" : "transparent" }}
            onClick={() => (setFile(true), setFolders(false))}>
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
          <div className="h-full  border-[#202124] border-0 border-r border-solid"></div>
          <div
            className="flex items-center justify-center px-[12px] rounded-r-3xl"
            style={{ backgroundColor: file ? "transparent" : "#c2e7ff" }}
            onClick={() => (setFile(false), setFolders(true))}>
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
      <div className="border-[#202124] border border-solid w-[110px] h-[30px] rounded-3xl flex cursor-pointer">
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
    </div>
  );
};

export default FileType;
