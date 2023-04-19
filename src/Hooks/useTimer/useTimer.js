import { useEffect, useState } from "react";

const useTimer = ({ timerOfCreated, isLong = false }) => {
  const [timer, setTimer] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const postDate = new Date(timerOfCreated);
      const currentDate = new Date();
      const diffInMilliseconds = currentDate.getTime() - postDate.getTime();
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      const diffInMonths = Math.floor(diffInDays / 30);
      const diffInYears = Math.floor(diffInMonths / 12);
      let timePosition;
      if (diffInSeconds < 60) {
        timePosition = `${diffInSeconds} ${
          isLong === true ? "seconds ago" : "sec"
        }`;
      } else if (diffInMinutes < 60) {
        timePosition = `${diffInMinutes} ${
          isLong === true ? "minutes ago" : "min"
        }`;
      } else if (diffInHours < 24) {
        timePosition = `${diffInHours} ${
          isLong === true ? "hours ago" : "hr"
        } `;
      } else if (diffInDays < 30) {
        timePosition = `${diffInDays} ${isLong === true ? "days ago" : "day"}`;
      } else if (diffInMonths < 12) {
        timePosition = `${diffInMonths} ${
          isLong === true ? "months ago" : "m"
        }`;
      } else {
        timePosition = `${diffInYears} ${isLong === true ? "years ago" : "y"}`;
      }
      setTimer(timePosition);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerOfCreated, isLong]);
  return { timer };
};

export default useTimer;
