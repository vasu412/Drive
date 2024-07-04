import { useEffect, useState } from "react";
import Data4 from "./data4";
import { dateString } from "../config/currDate";

const RecentData = ({ data, setShowIndex, setSelect, showIndex }) => {
  const [todayData, setTodayData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [yearData, setYearData] = useState(null);
  const [today, setToday] = useState(true);

  useEffect(() => {
    const filter1 = data.filter((x) => {
      if (x.date === dateString) return x;
    });
    filter1.sort((a, b) => {
      // Assuming a.time and b.time are in "hour:min AM/PM" format
      const timeTo24Hr = (time) => {
        const [timePart, modifier] = time.split(" ");
        let [hours, minutes] = timePart.split(":");
        if (hours === "12") {
          hours = "00";
        }
        if (modifier === "PM") {
          hours = parseInt(hours, 10) + 12;
        }
        return `${hours.padStart(2, "0")}:${minutes}`;
      };

      const timeA = timeTo24Hr(a.time);
      const timeB = timeTo24Hr(b.time);

      return timeA.localeCompare(timeB);
    });

    const filter2 = data.filter((x) => {
      if (x.date !== dateString) return x;
    });
    filter1 !== [] && setTodayData(filter1);
    filter2 !== [] && setWeekData(filter2);
  }, []);

  return (
    <div className="flex flex-col mt-[18px] w-full pl-[20px] pr-[12px]">
      <div className="flex items-center text-start text-[14px] border-[#c7c7c7] border-0  border-b-[1px] border-solid">
        <div className="w-[655px] h-[30px] pr-[6px] ">Name</div>
        <div className="w-[140px] h-[30px] px-[6px]">Owner</div>
        <div className="w-[92px] h-[30px] px-[6px]">File Size</div>
        <div className="w-[140px] h-[30px] px-[6px]">Location</div>
      </div>

      {todayData && todayData.length !== 0 && (
        <div className="flex items-center text-start text-[14px] border-[#c7c7c7] border-0 mt-[14px] border-b-[1px] border-solid">
          <div className="w-[655px] h-[30px] pr-[6px] text-[#5e5e5e] ">
            Today
          </div>
        </div>
      )}
      {todayData &&
        todayData.map((x, idx) => (
          <Data4
            x={x}
            key={x.id}
            idx={idx}
            show={idx === showIndex ? true : false}
            setShowIndex={setShowIndex}
            setSelect={setSelect}
            today={today}
          />
        ))}

      {weekData && weekData.length !== 0 && (
        <div className="flex items-center text-start text-[14px] border-[#c7c7c7] border-0 mt-[14px] border-b-[1px] border-solid">
          <div className="w-[655px] h-[30px] pr-[6px] text-[#5e5e5e] ">
            Earlier this week
          </div>
        </div>
      )}
      {weekData &&
        weekData.map((x, idx) => (
          <Data4
            x={x}
            key={x.id}
            idx={idx}
            show={idx === showIndex ? true : false}
            setShowIndex={setShowIndex}
            setSelect={setSelect}
          />
        ))}

      {yearData && yearData.length !== 0 && (
        <div className="flex items-center text-start text-[14px] border-[#c7c7c7] border-0 mt-[14px] border-b-[1px] border-solid">
          <div className="w-[655px] h-[30px] pr-[6px] text-[#5e5e5e]">
            Earlier this year
          </div>
        </div>
      )}
      {yearData &&
        yearData.map((x, idx) => (
          <Data4
            x={x}
            key={x.id}
            idx={idx}
            show={idx === showIndex ? true : false}
            setShowIndex={setShowIndex}
            setSelect={setSelect}
          />
        ))}
    </div>
  );
};

export default RecentData;
