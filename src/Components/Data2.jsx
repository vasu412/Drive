import doc from "/assets/doc.svg";
import pic from "/assets/pic.svg";
import movie from "/assets/movie.svg";
import pdf from "/assets/pdf.svg";

const Data2 = ({ x, show, setShowIndex, setSelect, idx }) => {
  let type = x.type.startsWith("image/")
    ? pic
    : x.type.startsWith("video/")
    ? movie
    : x.type.startsWith("text/")
    ? doc
    : pdf;

  var img = new Image();
  img.src = x.url;
  return (
    <div
      className="w-[260px] h-[260px] rounded-xl bg-[#f0f4f9] hover:bg-slate-200 cursor-pointer"
      onClick={() => {
        setShowIndex(idx);
        setSelect(true);
      }}
      style={{ backgroundColor: show ? "#c2e7ff" : "" }}>
      <div className="h-[48px] flex items-center justify-between">
        <img src={type} alt="" className="w-[20px] h-[20px] ml-[16px]" />
        <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[120px] py-[10px] px-[12px] text-[14px]">
          {x.name}
        </div>
        <div className="mr-[10px]">
          <i className="material-symbols-outlined text-[18px]">more_vert</i>
        </div>
      </div>
      <div className="m-[8px] mt-0 h-[200px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
        {img.width !== 0 ? (
          <a href={x.url} target="blank">
            <img src={x.url} />
          </a>
        ) : (
          <a href={x.url} target="blank">
            <img src={type} className="h-[65px]" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Data2;
