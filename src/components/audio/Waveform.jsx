import React, { useRef, useCallback } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import IconButton from "../buttons/IconButton";
import { FaPlay, FaPause } from "react-icons/fa";

const Waveform = ({ audioUrl, playback = true }) => {
  const waveformRef = useRef(null);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveformRef,
    height: 100,
    barWidth: 3,
    barRadius: 50,
    waveColor: "rgb(247, 248, 249)", // offwhite
    progressColor: "rgb(9, 0, 54)", // darkblue
    url: audioUrl,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <div className="flex items-center gap-4 w-full">
      {playback && (
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={onPlayPause}
          size="xlarge"
        />
      )}
      <div ref={waveformRef} className="w-full" aria-label="audio waveform" />
    </div>
  );
};

export default Waveform;
