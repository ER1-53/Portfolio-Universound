import SONGS from '../../models/mock-song';
import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import useAudioPlayer from '../../audioplayer/hooks';
import styles from './audioplayer.module.css'
import React from 'react';

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(SONGS);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    // Ensure both values are numbers or null
    const safeCurrentTrackPlaybackPosition = currentTrackPlaybackPosition === null ? 0 : currentTrackPlaybackPosition;
    const safeCurrentTrackDuration = currentTrackDuration === null ? 1 : currentTrackDuration; // Use 1 to avoid division by zero

    if (safeCurrentTrackDuration === 0) {
      // Handle situations where the duration is initially 0
      return 0;
    } else {
      return (safeCurrentTrackPlaybackPosition / safeCurrentTrackDuration) * 100;
    }
  }

  const isPlaying = playbackState === 'PLAYING';

  return (
    <div className={styles.playBox}>
      <div className={styles.songInfo}>
      <SongInfo
      title={currentTrackMetadata ? currentTrackMetadata.title : undefined}
      artist={currentTrackMetadata ? currentTrackMetadata.artist : undefined}
      coverArtSrc={currentTrackMetadata ? currentTrackMetadata.coverArtSrc : undefined}
      isPlaying={isPlaying}
      />
      </div>
      <div className={styles.songFollow}>
      <Controls
        shuffle={shuffle}
        repeat={repeat}
        onShuffleClick={toggleShuffle}
        onRepeatClick={toggleRepeat}
        onPrevClick={playPreviousTrack}
        onNextClick={playNextTrack}
        onPlayClick={togglePlayPause}
        isPlaying={playbackState === 'PLAYING'}
      />
      </div>
      <div>
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      </div>
      <div className={styles.heart}></div>
    </div>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) return '';
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, '0');
  const seconds = `${numberOfSeconds}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
}
