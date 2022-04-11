import {
  StyledHeaderText,
  StyledPlayer,
  StyledStopButton,
} from "../../blocks/Header/HeaderStyle";
import { audioFile, PauseIcon, PlayIcon, StopIcon } from "../../assets";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCounter, useAudioRef } from "../../hooks";

const Player = () => {
  const audioRef = useRef(null);
  const [playingRef, setPlayingRef, stopAudio] = useAudioRef(audioRef);
  const { warTime } = useCounter();
  const [icon, setIcon] = useState(PlayIcon);

  useEffect(() => {
    if (warTime) {
      setIcon(PlayIcon);
    } else {
      setIcon(playingRef ? PauseIcon : PlayIcon);
    }
  }, [setIcon, playingRef, warTime]);

  const handleAudioPlay = useCallback(
    (event) => {
      const text = event.target.src;
      const hasPlayText = text.includes("play");

      setIcon(hasPlayText ? PauseIcon : PlayIcon);
      setPlayingRef(!playingRef);
    },
    [setIcon, setPlayingRef, playingRef]
  );

  const handleAudioStop = useCallback(() => {
    setIcon(PlayIcon);
    setPlayingRef(false);
    stopAudio();
  }, [stopAudio, setIcon, setPlayingRef]);

  return !warTime ? (
    <StyledPlayer>
      <audio
        controls
        title="osmanli"
        preload="metadata"
        ref={audioRef}
        src={audioFile}
      />
      <input type="checkbox" id="play-check" onChange={handleAudioPlay} />
      <label htmlFor="play-check">
        <img src={icon} alt="stop" />
      </label>
      <StyledStopButton src={StopIcon} alt="stop" onClick={handleAudioStop} />
      <StyledHeaderText>Ottoman Music</StyledHeaderText>
    </StyledPlayer>
  ) : null;
};

export default Player;
