import React from "react";
import { HiOutlinePause } from "react-icons/hi";
import { BsPlay } from "react-icons/bs";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <HiOutlinePause size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <BsPlay size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
