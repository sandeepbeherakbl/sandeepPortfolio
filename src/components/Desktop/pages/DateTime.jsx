import { useState, useEffect } from "react";
import "../styles/DateTime.css";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { WiTime9, WiDaySunny, WiNightClear, WiSunset } from "react-icons/wi";
import { BsCalendarDate } from "react-icons/bs";

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

  const timeIcon = () => {
    const hours = currentTime.getHours();
    if (hours >= 6 && hours < 12) return <WiDaySunny className="weather-icon" />;
    if (hours >= 12 && hours < 18) return <WiTime9 className="weather-icon" />;
    if (hours >= 18 && hours < 21) return <WiSunset className="weather-icon" />;
    return <WiNightClear className="weather-icon" />;
  };

  return (
    <div className="date-time-card">
      <div className={`card ${timeOfDay}`}>
        <motion.div 
          className="date-time"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="time-wrapper">
            {/* {timeIcon()} */}
            <motion.div 
              className="time"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="time-unit"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <p>{String(hours).padStart(2, "0")}</p>
              </motion.div>
              <div className="colon">:</div>
              <motion.div 
                className="time-unit"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p>{String(minutes).padStart(2, "0")}</p>
              </motion.div>
              <motion.div 
                className="time-unit seconds"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p>{String(seconds).padStart(2, "0")}</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="card-date"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <BsCalendarDate className="calendar-icon" />
            <p className="date-text">
              {format(currentTime, "d MMMM yyyy")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default DateTimeCard;
