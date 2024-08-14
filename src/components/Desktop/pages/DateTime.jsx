import { useState, useEffect } from "react";
import "../styles/DateTime.css";
import { format } from "date-fns";

function DateTimeCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeOfDay = () => {
    const hours = currentTime.getHours();
    if (hours >= 6 && hours < 12) return "morning";
    if (hours >= 12 && hours < 18) return "afternoon";
    if (hours >= 18 && hours < 21) return "evening";
    return "night";
  };

  const timeOfDay = getTimeOfDay();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className={`card ${timeOfDay}`}>

      <div className="date-time">
      <div className="time">
        <p>{String(hours).padStart(2, "0")}</p>
        <p>:</p>
        <p>{String(minutes).padStart(2, "0")}</p>
        <p> </p>
        <p className="seconds">{String(seconds).padStart(2, "0")}</p>
      </div>

      <div className="card-date">
        <p>{format(currentTime, "d")} </p>
        <p>{format(currentTime, "MMMM yyyy")}</p>
      </div>
      </div>
      
    </div>
  );
}

export default DateTimeCard;
