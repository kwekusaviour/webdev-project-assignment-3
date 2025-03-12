import React, { useEffect, useState } from "react";

const Countdown = ({ endDate }) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endTime = typeof endDate === "number" ? endDate : endDate.getTime();
      const duration = endTime - now;

      if (duration < 0) {
        clearInterval(interval);
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(
        Math.floor(duration / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((duration % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <React.Fragment>
      <div className="text-amber-200 flex flex-wrap mt-10 sm:mt-6 md:mt-6 lg:mt-2 ml-0 sm:ml-4 md:ml-6 lg:ml-10">
        <div className="grid grid-flow-col gap-3 sm:gap-5 md:gap-7 lg:gap-10 text-center auto-cols-max">
          <div className="flex flex-col">
            <h1 className="flex flex-col font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {countdown.days}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl mt-1">
                {Number(countdown.days) > 1 ? "DAYS" : "DAY"}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="flex flex-col countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {countdown.hours}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl mt-1">
                {Number(countdown.hours) > 1 ? "HRS" : "HOUR"}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="flex flex-col countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {countdown.minutes}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl mt-1">
                {Number(countdown.minutes) > 1 ? "MIN" : "MINUTE"}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="flex flex-col countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {countdown.seconds}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl mt-1">
                {Number(countdown.seconds) > 1 ? "SEC" : "SECONDS"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Countdown;
