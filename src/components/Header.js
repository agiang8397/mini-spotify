import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <p>{currentTrackName}</p>
    </div>
  );
}

export default Header;
