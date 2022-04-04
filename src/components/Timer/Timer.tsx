import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { formatValue } from "../../utils/timeFormatter";
import { useCounter } from "../../hooks/useCounter";

// type CountObject = {
//   count: {
//     hours: number;
//     minutes: number;
//     seconds: number;
//   };
// };

const StyledText = styled.div`
  font-size: 60px;
  color: white;
  font-weight: 400;
  text-align: center;
`;

const Timer: FC = () => {
  const { count } = useCounter();
  const { hours, minutes, seconds } = count;
  const [displayTime, setDisplayTime] = useState("Loading timer...");

  useEffect(() => {
    const hasValue = Object.values(count).every((v) => !isNaN(v));

    if (hasValue) {
      setDisplayTime(
        `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`
      );
    }
  }, [hours, minutes, seconds, count, setDisplayTime]);

  return <StyledText>{displayTime}</StyledText>;
};

export default Timer;
