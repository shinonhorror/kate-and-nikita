import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import friends from '../../../../assets/music/friends_opening_season.mp3';

import { useState } from 'react';

const playlist = [{ src: friends }];

const Player = () => {
  const [currentTrack, setTrackIndex] = useState(0);
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <>
      <AudioPlayer
        src={playlist[currentTrack].src}
        onClickNext={handleClickNext}
        showSkipControls
        volume={0.5}
        showJumpControls={false}
        onEnded={handleEnd}
        autoPlay
        loop={true}
        autoPlayAfterSrcChange
      />
    </>
  );
};

export default Player;
