import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addState } from "../config/slices";

const NavLeft = () => {
  const [filesContent, setFilesContent] = useState("");
  const [click, setClick] = useState(1);
  const driveData = collection(db, "driveData");

  const handleButtonClick = async () => {
    document.getElementById("fileInput").click();
    // const directoryHandle = await window.showDirectoryPicker();

    // for await (const [name, handle] of directoryHandle.entries()) {
    //   if (handle.kind === "file") {
    //     console.log(name);
    //     const file = await handle.getFile();
    //     console.log(file);
    //   }
    // }

    setClick((prev) => prev + 1);
  };

  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const files = event.target.files;
    console.log(files);
    await addDoc(driveData, {
      name: files[0].name,
      size: files[0].size,
      type: files[0].type,
      lastModified: new Date(files[0].lastModified).toLocaleString(),
    });
  };

  useEffect(() => {
    async function get() {
      const data = await getDocs(driveData);
      const filtereData = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      setFilesContent(filtereData);
      dispatch(addState([...filesContent]));
    }
    get();
  }, [click]);

  return (
    <div className="float-left w-[250px]  flex flex-col justify-center items-start px-[12px] pt-[10px]">
      <div>
        <button
          className="w-[105px] bg-[#fff] text-[15px] flex items-center justify-center  shadow-md rounded-2xl py-[2.5px] relative"
          onClick={(e) => handleButtonClick(e)}>
          <span className="text-[30px] font-[300] mb-[4px]">+</span>
          <span className="ml-[13px] text-[14px]">New</span>
          <input
            type="file"
            id="fileInput"
            className="h-[50px] w-full absolute left-0 py-[2.5px] hidden"
            onChange={handleFileChange}
          />
        </button>
        {/* <div className="bg-white w-[330px] h-[150px] absolute top-[70px] shadow-md rounded-lg none">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
      <div className="mt-[20px]">
        <div>
          <Link to={"/home"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <img
                src="/assets/gd.png"
                alt=""
                className="h-[18px] w-[18px] mr-[8px]"
              />
              <p className="font-[300] text-[14px]">My Drive</p>
            </div>
          </Link>

          <Link to={"/home/computer"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <i className="material-symbols-outlined text-[19px] mr-[8px] text-[#5f6368]">
                devices
              </i>
              <p className="font-[300] text-[14px]">Computers</p>
            </div>
          </Link>
          <br />

          <Link to={"/home/shared"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <img
                src="/assets/group.png"
                alt=""
                className="h-[18px] w-[20px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Shared with me</p>
            </div>
          </Link>
          <Link to={"/home/recent"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <i className="material-icons text-[19px] mr-[8px]">schedule</i>
              <p className="font-[300] text-[14px]">Recent</p>
            </div>
          </Link>
          <Link to={"/home/starred"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <img
                src="/assets/favorite.png"
                alt=""
                className="h-[15px] w-[16px] mr-[11px]"
              />
              <p className="font-[300] text-[14px]">Starred</p>
            </div>
          </Link>
          <br />

          <Link to={"/home/spam"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <img
                src="/assets/spam.png"
                alt=""
                className="h-[15px] w-[16px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Spam</p>
            </div>
          </Link>

          <Link to={"/home/trash"}>
            <div className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer">
              <img
                src="/assets/trash-can.png"
                alt=""
                className="h-[15px] w-[16px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Trash</p>
            </div>
          </Link>
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
