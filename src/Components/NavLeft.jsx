import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../config/slices";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import {
  dateString,
  timeString,
  formatDate,
  formatFileSize,
} from "../config/currDate";
import { onAuthStateChanged } from "firebase/auth";
import Routes from "./routes";

const NavLeft = ({
  setType,
  setOpen,
  setFileName,
  setLoading,
  setCheck,
  day,
}) => {
  const dispatch = useDispatch();
  const storage = getStorage();

  const [fileURL, setFileURL] = useState("");
  const [file, setFile] = useState("");
  const [doc, setDoc] = useState(null);
  const [idx, setIdx] = useState(1);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

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

  const state = useSelector((store) => store.simpleState.count);
  const driveData = userId && collection(db, userId);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setFile(file);
      setOpen(true);
      setFileName(file.name);
      setType(file.type.split("/")[0]);

      const storedFile = ref(storage, file.name);
      await uploadBytes(storedFile, file);
      const url = await getDownloadURL(storedFile);
      setFileURL(url);
      setLoading(false);
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
      if (doc) {
        const existingFile = doc.find((x) => x.name === file.name);
        !existingFile &&
          (await addDoc(driveData, {
            name: file?.name,
            size: formatFileSize(file?.size),
            type: file?.type || "",
            lastModified: formatDate(file?.lastModified),
            url: fileURL,
            isStarred: false,
            date: dateString,
            time: timeString,
          }));

        existingFile && toast("File Already Exists!!!");
      }
    }
    send();
  }, [fileURL]);

  useEffect(() => {
    userId && get();
  }, [fileURL, state, userId]);

  return (
    <div
      className="float-left w-[250px]  flex flex-col justify-center items-start px-[12px] pt-[10px]"
      style={{
        color: day ? "black" : "#e3e3e3",
      }}>
      <div>
        <button
          className="w-[105px] bg-[#fff] text-[15px] flex items-center justify-center  shadow-md rounded-2xl py-[2.5px] relative"
          onClick={(e) => handleButtonClick(e)}
          style={{
            backgroundColor: day ? "#fff" : "#37393b",
            color: day ? "black" : "#e3e3e3",
          }}>
          <span className="text-[30px] font-[300] mb-[4px]">+</span>
          <span className="ml-[13px] text-[14px]">New</span>
          <input
            type="file"
            id="fileInput"
            className="h-[50px] w-full absolute left-0 py-[2.5px] hidden"
            onChange={handleFileChange}
          />
        </button>
      </div>
      <Routes setCheck={setCheck} setIdx={setIdx} idx={idx} />
    </div>
  );
};

export default NavLeft;
