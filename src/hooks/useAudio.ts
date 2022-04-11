import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const useAudio = (url: string) => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);

  const stopAudio = useCallback(() => (audio.currentTime = 0), [audio]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return { playing, setPlaying, stopAudio };
};

/**
 * useAudioRef hook
 * @param audioRef
 */
export const useAudioRef = (audioRef: any) => {
  const [audio] = useState(audioRef);
  const [playingRef, setPlayingRef] = useState(false);

  const stopAudio = useCallback(() => {
    if (audio) audio.current.currentTime = 0;
  }, [audio]);

  useEffect(() => {
    if (audio) playingRef ? audio.current.play() : audio.current.pause();
  }, [playingRef, audio]);

  useEffect(() => {
    audio &&
      audio.current.addEventListener("ended", () => setPlayingRef(false));
    return () => {
      audio &&
        audio.current.removeEventListener("ended", () => setPlayingRef(false));
    };
  }, [audio]);

  return [playingRef, setPlayingRef, stopAudio] as const;
};
