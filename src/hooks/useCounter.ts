import { useCallback, useEffect, useRef, useState } from "react";
import {
  formatCounter,
  setTimeToFormattedString,
} from "../utils/timeFormatter";
import { START_DATE } from "../constants";

type CounterType = {
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Set the hours, minutes and seconds based
 * on the timeLeft is given
 * @param timeLeft
 */
const getTime = (timeLeft: number) => {
  return {
    hours: +formatCounter((timeLeft / 60 / 60) % 60),
    minutes: +formatCounter((timeLeft / 60) % 60),
    seconds: +formatCounter(timeLeft % 60),
  };
};

/**
 * useCounter hook
 * Get the currentTime as timestamp or formatted
 * Get also count that is created from the getTime()
 */
export const useCounter = () => {
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());

  // time in string, only used for the header
  const currentFormattedTime: string = setTimeToFormattedString(new Date());

  // start time (14:53)
  const startTime = useRef(new Date(START_DATE).getTime());

  // get the distance between startTime and currentTime
  const calculatedTimeLeft = (startTime.current - currentTime) / 1000;
  const [timeLeft, setTimeLeft] = useState<number>(calculatedTimeLeft);

  // set count with hours, minutes and seconds
  const [count, setCount] = useState<CounterType>(getTime(timeLeft));

  const warTime = count.hours === 23 && count.minutes === 59;

  const handleSetCount = useCallback(() => {
    setCount({ ...getTime(timeLeft) });
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      // reset countdown with 24 hours
      const day = 1000 * 60 * 60 * 24;
      const newDay = (startTime.current += day);
      setTimeLeft((newDay - currentTime) / 1000);
    } else {
      setTimeLeft((startTime.current - currentTime) / 1000);

      const timerId = setInterval(() => {
        setCurrentTime(new Date().getTime());
        handleSetCount();
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft, currentTime, handleSetCount]);

  return { count, currentTime, currentFormattedTime, warTime };
};
