const Spam = () => {
  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[14px] pb-[6px]">Spam</h1>
      <div className="ml-[20px] mr-[7px] mt-[14px] px-[15px] py-[13px]  text-[13px] text-[#3c4043] bg-[#e3e5e6] rounded-lg">
        Files in spam won’t appear anywhere else in Drive. Files are permanently
        removed after 30 days.
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_spam.svg"
          alt=""
          className="h-[200px] w-[200px] mt-[140px]"
        />
        <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
          Your spam is empty
        </h1>
        <p className="font-[300] mx-[300px] text-center">
          Files in spam won't appear anywhere else in Drive. Files are
          permanently removed after 30 days.{" "}
        </p>
      </div>
    </>
  );
};

export default Spam;
