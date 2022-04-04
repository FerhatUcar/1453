import React, {FC, useCallback, useEffect, useState} from "react";
import { useCounter } from "../../hooks/useCounter";
import {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
  StyledHeaderText,
  StyledPlayer,
} from "./HeaderStyle";
import MenuIcon from "../../assets/img/menu.svg";
import PlayIcon from "../../assets/img/play.svg";
import PauseIcon from "../../assets/img/pause.svg";
import StopIcon from "../../assets/img/stop.svg";
import { useAudio } from "../../hooks/useAudio";
const audioFile = require("../../assets/audio/Buna-Er-Meydani-Derler.mp3");

type HeaderProps = {
  openMenu: () => void;
};

const Header: FC<HeaderProps> = ({ openMenu }) => {
  const { currentFormattedTime } = useCounter();
  const { playing, setPlaying, stopAudio } = useAudio(audioFile);
  const { warTime } = useCounter();
  const [icon, setIcon] = useState(PlayIcon);

  useEffect(() => {
    setIcon(playing ? PauseIcon : PlayIcon)
  }, [setIcon, playing])

  useEffect(() => {
    if (warTime) {
      setPlaying(false);
      setIcon(PlayIcon)
    }
  }, [setIcon, setPlaying, warTime])

  const handleAudioPlay = useCallback(
    (event) => {
      const text = event.target.src;
      const hasPlayText = text.includes("play");

      setIcon(hasPlayText ? PauseIcon : PlayIcon);
      setPlaying(!playing);
    },
    [setIcon, setPlaying, playing]
  );

  const handleAudioStop = useCallback(() => {
    setIcon(PlayIcon);
    setPlaying(false);
    stopAudio();
  }, [stopAudio, setIcon, setPlaying]);

  return (
    <StyledHeader>
      <StyledInnerBox>
        <StyledHamburger onClick={openMenu}>
          <img src={MenuIcon} alt="menu" />
        </StyledHamburger>
        <StyledHeaderRightContent>
          <StyledPlayer>
            {!warTime && (
               <>
                 <img src={icon} alt="play" onClick={handleAudioPlay} />
                 <img src={StopIcon} alt="stop" onClick={handleAudioStop} />
               </>
            )}
            <StyledHeaderText>{!warTime ? "Ottoman Music" : "Wartime!"}</StyledHeaderText>
          </StyledPlayer>
          <div>{currentFormattedTime}</div>
        </StyledHeaderRightContent>
      </StyledInnerBox>
    </StyledHeader>
  );
};

export default Header;
