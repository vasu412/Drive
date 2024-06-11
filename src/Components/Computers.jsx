const Computer = () => {
  return (
    <>
      <h1 className="font-gr text-[24px] pl-[20px] pt-[14px] pb-[6px]">
        Computers
      </h1>
      <div className="flex flex-col items-center">
        <img
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_computers_v4.svg"
          alt=""
          className="h-[200px] w-[200px] mt-[140px]"
        />
        <h1 className="mt-[16px] mb-[8px] font-gr font-[300] text-[24px]">
          No folders syncing with Drive
        </h1>
        <p className="font-[300] mx-[300px] text-center">
          Folders on your computer that you sync with Drive using Drive for
          desktop will show up .{" "}
          <a
            href="https://support.google.com/drive/answer/10838124?visit_id=638536351315482196-2136442599&p=empty_state_computers_web&rd=1"
            className="text-[#1a73e8]">
            Learn More
          </a>
        </p>
      </div>
    </>
  );
};

export default Computer;
