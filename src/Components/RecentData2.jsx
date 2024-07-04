import { useEffect, useState } from "react";
import Data2 from "./Data2";
import { dateString } from "../config/currDate";

const RecentData2 = ({ data, setShowIndex, setSelect, showIndex }) => {
  const [todayData, setTodayData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    const filter1 = data.filter((x) => {
      if (x.date === dateString) return x;
    });

    const filter2 = data.filter((x) => {
      console.log(x.date.split(" "));
      if (x.date !== dateString) return x;
    });
    filter1 !== [] && setTodayData(filter1);
    filter2 !== [] && setWeekData(filter2);
  }, []);

  return (
    <>
      <div className="pl-[20px] pt-[6px] pr-[12px]">
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
