import {
  GlobalStyle,
  StyledContainer,
  StyledCounterBox,
  StyledWartimeText,
} from "../style/app.style";
import Checkbox from "../components/Checkbox/Checkbox";
import Timer from "../components/Timer/Timer";
import { ChangeEventHandler, useEffect } from "react";
import { useCounter, useAudio } from "../hooks";
const battleSound = require("../assets/audio/battle.wav");

type ChangeEvent = ChangeEventHandler<HTMLInputElement>;

const Home = () => {
  const { setPlaying } = useAudio(battleSound);
  const { count, warTime } = useCounter();

  const handleSoundOnChange: ChangeEvent = (event) => {
    const checked = event.target.checked;

    setPlaying(checked);
  };

  useEffect(() => {
    setPlaying(warTime);
  }, [count, warTime, setPlaying]);

  return (
    <>
      <GlobalStyle is1453={warTime} />
      {warTime && (
        <Checkbox onChange={handleSoundOnChange} text="Play war sound" />
      )}
      <StyledContainer>
        <StyledCounterBox>
          {!warTime && (
            <>
              <span>Time left until 1453</span>
              <Timer />
            </>
          )}

          {warTime && <StyledWartimeText>Wartime!</StyledWartimeText>}
        </StyledCounterBox>
      </StyledContainer>
    </>
  );
};

export default Home;
