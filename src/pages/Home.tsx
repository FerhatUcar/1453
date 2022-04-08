import {
  GlobalStyle,
  StyledContainer,
  StyledCounterBox,
} from "../style/app.style";
import Checkbox from "../components/Checkbox/Checkbox";
import Timer from "../components/Timer/Timer";
import { ChangeEventHandler, useEffect } from "react";
import { useCounter, useAudio } from "../hooks";
const audioFile = require("../assets/audio/battle.wav");

type ChangeEvent = ChangeEventHandler<HTMLInputElement>;

const Home = () => {
  const { playing, setPlaying } = useAudio(audioFile);
  const { count, warTime } = useCounter();

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
      <GlobalStyle is1453={warTime} />
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
