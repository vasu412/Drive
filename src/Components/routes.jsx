import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Routes = ({ setCheck, setIdx, idx }) => {
  return (
    <>
      <div className="mt-[20px]">
        <div>
          <Link to={"/home"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(false), setIdx(1);
              }}
              style={{ backgroundColor: idx === 1 ? "#c2e7ff" : "" }}>
              <img
                src="/assets/gd.png"
                alt=""
                className="h-[18px] w-[18px] mr-[8px]"
              />
              <p className="font-[300] text-[14px]">My Drive</p>
            </div>
          </Link>
          <ToastContainer />
          <Link to={"/home/computer"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(2);
              }}
              style={{ backgroundColor: idx === 2 ? "#c2e7ff" : "" }}>
              <i className="material-symbols-outlined text-[19px] mr-[8px] text-[#5f6368]">
                devices
              </i>
              <p className="font-[300] text-[14px]">Computers</p>
            </div>
          </Link>
          <br />
          <Link to={"/home/shared"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(3);
              }}
              style={{ backgroundColor: idx === 3 ? "#c2e7ff" : "" }}>
              <img
                src="/assets/group.png"
                alt=""
                className="h-[18px] w-[20px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Shared with me</p>
            </div>
          </Link>
          <Link to={"/home/recent"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(4);
              }}
              style={{ backgroundColor: idx === 4 ? "#c2e7ff" : "" }}>
              <i className="material-icons text-[19px] mr-[8px]">schedule</i>
              <p className="font-[300] text-[14px]">Recent</p>
            </div>
          </Link>
          <Link to={"/home/starred"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(5);
              }}
              style={{ backgroundColor: idx === 5 ? "#c2e7ff" : "" }}>
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
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(6);
              }}
              style={{ backgroundColor: idx === 6 ? "#c2e7ff" : "" }}>
              <img
                src="/assets/spam.png"
                alt=""
                className="h-[15px] w-[16px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Spam</p>
            </div>
          </Link>

          <Link to={"/home/trash"}>
            <div
              className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setCheck(true), setIdx(7);
              }}
              style={{ backgroundColor: idx === 7 ? "#c2e7ff" : "" }}>
              <img
                src="/assets/trash-can.png"
                alt=""
                className="h-[15px] w-[16px] mr-[7px]"
              />
              <p className="font-[300] text-[14px]">Trash</p>
            </div>
          </Link>
          <div
            className="flex  justify-start items-center w-[220px] px-[20px] rounded-3xl py-[5.5px] hover:bg-slate-200 cursor-pointer"
            style={{ backgroundColor: idx === 8 ? "#c2e7ff" : "" }}
            onClick={() => {
              setCheck(true), setIdx(8);
            }}>
            <img
              src="/assets/c.png"
              alt=""
              className="h-[18px] w-[18px] mr-[7px]"
            />
            <p className="font-[300] text-[14px]">Storage</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Routes;
