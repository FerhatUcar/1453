import {
  GlobalStyle,
  StyledContainer,
  StyledCounterBox,
} from "../style/app.style";
import Checkbox from "../components/Checkbox/Checkbox";
import Timer from "../components/Timer/Timer";
import { ChangeEventHandler, useEffect } from "react";
import { useAudio } from "../hooks/useAudio";
import { useCounter } from "../hooks/useCounter";
const audioFile = require("../assets/audio/battle.wav");

type ChangeEvent = ChangeEventHandler<HTMLInputElement>;

const Home = () => {
  const { playing, setPlaying } = useAudio(audioFile);
  const { count } = useCounter();
  const warTime = count.hours === 23 && count.minutes === 59;

  const handleSound: ChangeEvent = (event) => {
    const checked = event.target.checked;

    if (!playing) {
      setPlaying(checked && warTime);
    }
  };

  useEffect(() => {
    setPlaying(warTime);
  }, [count, warTime, setPlaying]);

  return (
    <>
      <GlobalStyle is1453={warTime} backgroundImage />
      <Checkbox onChange={handleSound} text="Play war sound at 1453 (CHROME)" />
      <StyledContainer is1453={warTime}>
        <StyledCounterBox>
          <span>Time left until 1453</span>
          <Timer />
        </StyledCounterBox>
      </StyledContainer>
    </>
  );
};

export default Home;
