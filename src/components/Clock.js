import React, { useState, useEffect } from "react";
import { format, toZonedTime } from "date-fns-tz";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const timeZone = "Asia/Jakarta";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const zonedDate = toZonedTime(time, timeZone);
  const timeString = format(zonedDate, "HH:mm:ss");
  const dateString = format(zonedDate, "EEE, dd MMM yyyy");

  return (
    <div>
      <div className="text-3xl font-mono">{timeString}</div>
      <small className="text-gray-500">{dateString}</small>
    </div>
  );
};

export default Clock;
