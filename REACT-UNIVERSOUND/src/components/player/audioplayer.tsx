import React, { useEffect, useState } from 'react';
import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import useAudioPlayer from '../../audioplayer/hooks';
import styles from './audioplayer.module.css'
import SongService from '../../service/song_service';
import Song from "../../models/song";
import { RootStateOrAny, useSelector } from 'react-redux';

const AudioPlayer = () => {
  // State to store the list of songs
  const [songs, setSongs] = useState<Song[]>([]);
  // Get song ID and user data from Redux store
  const songId = useSelector((state: RootStateOrAny) => state.song.song.id)
  const user = useSelector((state: RootStateOrAny) => state.user.user);

  // Effect hook to fetch songs on component mount or song/user data change
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch song list based on username and user ID
        const songs = await SongService.fetchSongList(user.username, user.id);
        // Check if a specific song ID is provided
        if (songId !== undefined) {
          // Find the song object matching the song ID
          const song = songs.find(song => song.id === songId);
          if (song) {
            // Set the songs state to an array containing only the matched song
            setSongs([song]);
          }
        } else {
          // If no specific song ID, set the songs state to the entire list
          setSongs(songs);
        }
      } catch (error) {
        console.error(`Error fetching songs: ${error}`);
      }
    };
    loadData();
  }, [songId]);

  // Destructure functions and state from the useAudioPlayer hook
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(songs);/* useAudioPlayer(SONGS); */

  // Destructure individual player state properties
  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  // Function to handle progress bar changes (updates playback position)
  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      // Calculate the new playback position based on the progress bar value
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  // Function to calculate the current progress as a percentage
  function computeProgress(): number {
    // Handle cases where values might be null
    const safeCurrentTrackPlaybackPosition = currentTrackPlaybackPosition === null ? 0 : currentTrackPlaybackPosition;
    const safeCurrentTrackDuration = currentTrackDuration === null ? 1 : currentTrackDuration; // Use 1 to avoid division by zero

    if (safeCurrentTrackDuration === 0) {
      // Handle situations where the duration is initially 0
      return 0;
    } else {
      return (safeCurrentTrackPlaybackPosition / safeCurrentTrackDuration) * 100;
    }
  }

  // Helper function to determine if the audio is currently playing
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
      <div className={styles.progressbar}>
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      </div>
      {/* <div className={styles.heart}></div> */}
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
