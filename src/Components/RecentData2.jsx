import { useEffect, useState } from "react";
import Data2 from "./Data2";
import { dateString } from "../config/currDate";
import { startOfWeek } from "../config/currDate";

const RecentData2 = ({ data, setShowIndex, setSelect, showIndex }) => {
  const [todayData, setTodayData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    const filter1 = data.filter((x) => {
      if (x.date === dateString) return x;
    });

    const filter2 = data.filter((x) => {
      const xDate = new Date();
      return x.date < xDate && x.date > startOfWeek;
    });

    const filter3 = data.filter((x) => {
      if (!filter1.includes(x) && !filter2.includes(x)) return x;
    });

    setTodayData(filter1);
    setWeekData(filter2);
    setYearData(filter3);
  }, []);

  return (
    <>
      <div className="pl-[20px] pt-[6px] pr-[12px] overflow-scroll h-[550px]">
        {todayData && todayData.length !== 0 && (
          <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">Today</h1>
        )}
        <div className="flex flex-wrap gap-[17px]">
          {todayData &&
            todayData.map((x, idx) => (
              <Data2
                x={x}
                key={x.id}
                show={idx === showIndex ? true : false}
                setShowIndex={setShowIndex}
                setSelect={setSelect}
                idx={idx}
              />
            ))}
        </div>

        {weekData && weekData.length != 0 && (
          <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">
            Earlier this week
          </h1>
        )}
        <div className="flex flex-wrap gap-[17px]">
          {weekData &&
            weekData.map((x, idx) => (
              <Data2
                x={x}
                key={x.id}
                show={idx === showIndex ? true : false}
                setShowIndex={setShowIndex}
                setSelect={setSelect}
                idx={idx}
              />
            ))}
        </div>

        {yearData && yearData.length !== 0 && (
          <h1 className="pt-[8px] pb-[16px] text-[14px] font-gr">
            Earlier this year
          </h1>
        )}
        <div className="flex flex-wrap gap-[17px]">
          {yearData &&
            yearData.map((x, idx) => (
              <Data2
                x={x}
                key={x.id}
                show={idx === showIndex ? true : false}
                setShowIndex={setShowIndex}
                setSelect={setSelect}
                idx={idx}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentData2;
