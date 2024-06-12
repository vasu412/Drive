import React, { useEffect, useState } from "react";
import NavLeft from "./NavLeft";
import { Outlet, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "../config/store";
import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { addProfile } from "../config/slices";
import docs from "/assets/doc.svg";
import pic from "/assets/pic.svg";
import movie from "/assets/movie.svg";
import pdf from "/assets/pdf.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const prof = collection(db, "profile");
  const [pro, setPro] = useState(false);

  const [types, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(true);

  let type =
    types == "image"
      ? pic
      : types == "video"
      ? movie
      : types == "text"
      ? docs
      : pdf;

  const dispatch = useDispatch();
  useEffect(() => {
    async function get() {
      const data = await getDocs(prof);
      const filtereData = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      setProfile(filtereData[0]);
      dispatch(addProfile({ ...filtereData[0] }));
    }
    get();
  }, []);

  async function logOut() {
    try {
      await signOut(auth);
      await deleteDoc(doc(prof, profile.id));
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <>
      <Provider store={store}>
        <nav className="bg-[#f0f4f9] shadow h-[100vh] w-full">
          <div className="flex px-[25px] items-center justify-between h-[60px]">
            <div className="flex items-center">
              <img src="/assets/google-drive.png" alt="" className="h-[40px]" />
              <h1 className="font-gr text-[21px] ml-[8px] text-[#202124]">
                Drive
              </h1>
            </div>
            <div className="relative mr-[180px] hidden">
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
              <div
                className="h-[40px] w-[60px] flex items-center justify-center  hover:bg-slate-200 rounded-full "
                onClick={() => setPro(true)}>
                <img
                  src={profile.photoURL}
                  className="rounded-full h-[34px]"></img>
              </div>
              {pro && (
                <div
                  className="h-[332px] w-[402px] p-[18px] flex flex-col justify-between items-center absolute right-[20px] top-[60px] rounded-3xl bg-[#e9eef6] z-10 text-[#444746]"
                  style={{
                    boxShadow:
                      "0 4px 8px 3px rgba(0, 0, 0, .15), 0 1px 3px rgba(0, 0, 0, .3)",
                  }}>
                  <div className="w-full h-[56px] text-center">
                    {profile.email}
                  </div>
                  <div>
                    <img
                      src={profile.photoURL}
                      alt=""
                      className="h-[80px] w-[80px] mx-[150px] mt-[22px] rounded-full"
                    />
                  </div>
                  <div className="my-[8px] text-[22px] font-gr">
                    Hi, {profile.displayName}!
                  </div>
                  <div
                    className="mt-[12px] h-[59px] w-[200px] flex items-center justify-center rounded-3xl bg-[#f8fafd] text-center text-gr text-[14px] cursor-pointer"
                    onClick={logOut}>
                    <i className="material-symbols-outlined mr-[10px]">
                      logout
                    </i>{" "}
                    Sign out
                  </div>
                  <div className="text-[#303030] text-[11px] mt-[20px]">
                    <a href="https://policies.google.com/privacy?hl=en">
                      <span>Privacy Policy </span>
                    </a>
                    <span> . </span>
                    <a href="https://policies.google.com/terms?hl=en">
                      <span> Terms of Service</span>
                    </a>
                  </div>
                  <span onClick={() => setPro(false)}>
                    <i className="material-symbols-outlined absolute right-[20px] top-[20px] cursor-pointer">
                      close
                    </i>
                  </span>
                </div>
              )}
            </div>
          </div>

          <NavLeft
            setFileName={setFileName}
            setOpen={setOpen}
            setLoading={setLoading}
            setType={setType}
          />
          <div className="float-right bg-white w-[78.5vw] h-[91vh] rounded-2xl mr-[55px] overflow-scroll">
            <Outlet />
          </div>

          {open && (
            <div className="w-[360px] bg-[#f8fafd] absolute bottom-0 right-[25px] shadow-xl border rounded-t-2xl">
              <div className="w-full h-[54px] flex items-center justify-between">
                <p className="pl-[17px] font-gr">
                  {loading ? "Uploading Item" : "Upload Complete"}
                </p>
                <div
                  className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-slate-200 rounded-full  transition-all delay-75 mr-[4px] cursor-pointer"
                  onClick={() => setOpen(false)}>
                  <i className="material-symbols-outlined text-[22px] ">
                    close
                  </i>
                </div>
              </div>
              <div className="h-[51px] flex items-center justify-between bg-white">
                <div className="mr-[25px] flex items-center">
                  <img
                    src={type}
                    alt=""
                    className="w-[20px] h-[20px] ml-[16px]"
                  />
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
          )}
        </nav>
      </Provider>
    </>
  );
};

export default Navbar;
