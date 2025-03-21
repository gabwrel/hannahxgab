import React, { useState } from "react";
import Howler from "react-howler";
import { IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      {/* Background Music */}
      <Howler
        src="/music.mp3" // Place your audio file in the /public folder
        playing={isPlaying}
        loop={true} // Loops the music
        volume={0.5} // Adjust volume (0 to 1)
      />

      {/* Play/Pause Button */}
      <IconButton
        aria-label="Music Control"
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={() => setIsPlaying(!isPlaying)}
        position="fixed"
        bottom="20px"
        right="20px"
        bg="#e36aa5"
        color="white"
        _hover={{ bg: "#f295be" }}
        zIndex={3}
      />
    </>
  );
};

export default MusicPlayer;
