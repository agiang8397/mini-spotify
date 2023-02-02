import React, { useState, createContext } from "react";
import Track1 from "../music/track1.mp3";
import Track2 from "../music/track2.mp3";
import Track3 from "../music/track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "A Small Miracle",
      file: Track1,
    },
    {
      name: "Relaxed Vlog",
      file: Track2,
    },
    {
      name: "Dark Mystery Trailer (Taking Our time)",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
