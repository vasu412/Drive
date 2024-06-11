import { useSelector } from "react-redux";

const Data = ({ x }) => {
  const profile = useSelector((store) => store.profile.profileVal);

  let type =
    x.type.split("/")[0] == "image"
      ? "image"
      : x.type.split("/")[0] == "video"
      ? "action"
      : x.type.split("/")[0] == "text"
      ? "cloud-storage"
      : "pdf";
  return (
    <div
      className="flex items-center text-start text-[14px] h-[40px] border-[#dadce0]  border-b"
      key={x.id}>
      <div className="w-[56px]  flex items-center justify-center">
        <img
          src={"/assets/" + type + ".png"}
          alt=""
          className="w-[19px] h-[20px]"
        />
      </div>
      <div className="w-[326px]  pr-[6px] text-ellipsis overflow-hidden whitespace-nowrap">
        {x.name}
      </div>
      <div className="w-[215px]  px-[6px] flex">
        <img
          src={profile.photoURL}
          className="rounded-full h-[24px] w-[24px] mr-[8px]"
          alt=""
        />
        me
      </div>
      <div className="w-[200px]  px-[6px]">{x.lastModified.split(",")[0]}</div>
      <div className="w-[82px]  px-[6px]">{Math.ceil(x.size / 1000)}KB</div>
      <div className="w-[204px]  px-[6px] mr-[6px] text-end">
        <i className="material-symbols-outlined text-[18px]">more_vert</i>
      </div>
    </div>
  );
};

export default Data;
