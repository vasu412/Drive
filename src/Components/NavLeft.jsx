import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addState } from "../config/slices";
import { ToastContainer, toast } from "react-toastify";

const NavLeft = () => {
  const driveData = collection(db, "driveData");
  const dispatch = useDispatch();

  const [fileURL, setFileURL] = useState("");
  const [file, setFile] = useState("");
  const [doc, setDoc] = useState(null);
  const [check, setCheck] = useState(true);

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
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const fileBlob = new Blob([e.target.result], { type: file.type });
        const url = URL.createObjectURL(fileBlob);
        setFileURL(url);
      };
      if (file.type.startsWith("image/") || file.type.startsWith("text/")) {
        fileReader.readAsDataURL(file); // For images and text files
      } else {
        fileReader.readAsArrayBuffer(file); // For other types (default)
      }
    }
  };

  async function get() {
    const data = await getDocs(driveData);
    const filteredData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    setDoc([...filteredData]);
    dispatch(addState([...filteredData]));
  }

  useEffect(() => {
    async function send() {
      let count = 0;
      if (doc) {
        doc.map((x) => {
          if (x.name !== file.name) count++;
        });
        console.log(doc.length, count);
        doc.length === count &&
          (await addDoc(driveData, {
            name: file?.name,
            size: file?.size,
            type: file?.type || "",
            lastModified: new Date(file?.lastModified).toLocaleString(),
            url: fileURL || "",
          }));
      }
    }
    send();
  }, [doc, file]);

  useEffect(() => {
    get();
  }, [file]);

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
        <ToastContainer />
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
