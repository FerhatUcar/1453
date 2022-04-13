import { useCallback, useEffect, useRef, useState } from "react";
import {
  StyledHeaderText,
  StyledPlayer,
  StyledStopButton,
} from "../../blocks/Header/HeaderStyle";
import { audioFile, PauseIcon, PlayIcon, StopIcon } from "../../assets";
import { useCounter, useAudioRef } from "../../hooks";

const Player = () => {
  const audioRef = useRef(null);
  const [playingRef, setPlayingRef, stopAudio] = useAudioRef(audioRef);
  const { warTime } = useCounter();
  const [icon, setIcon] = useState(PlayIcon);

  useEffect(() => {
    if (warTime) {
      setIcon(PlayIcon);
      setPlayingRef(false);
      stopAudio();
    } else {
      setIcon(playingRef ? PauseIcon : PlayIcon);
    }
  }, [setIcon, playingRef, warTime, stopAudio, setPlayingRef]);

  const handleAudioPlay = useCallback(
    (event) => {
      if (warTime) event.preventDefault();

      const text = event.target.src;
      const hasPlayText = text.includes("play");

      setIcon(hasPlayText ? PauseIcon : PlayIcon);
      setPlayingRef(!playingRef);
    },
    [setIcon, setPlayingRef, playingRef, warTime]
  );

  const handleAudioStop = useCallback(() => {
    setIcon(PlayIcon);
    setPlayingRef(false);
    stopAudio();
  }, [stopAudio, setIcon, setPlayingRef]);

  return (
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
      <StyledHeaderText>
        {warTime ? "Wartime" : "Ottoman Music"}
      </StyledHeaderText>
    </StyledPlayer>
  );
};

export default Player;
