import SongService from '../service/song_service';
import { useState, useRef, useEffect } from 'react';
import { Controls, InitialPlayerState, PlayerState, Song } from './types';
import { createAudioplayer } from './audioplayer';
import { RootStateOrAny, useSelector } from 'react-redux';

// Interface for the Audio Player component with combined controls and state
interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

// Custom hook for managing the audio player logic
function useAudioPlayer(SONG: Song): AudioPlayer {
  // State for player state information
  const [playerState, setPlayerState] = useState<PlayerState>(InitialPlayerState);
  // Reference to store the created audio player controls object
  const playerRef = useRef<Controls | null>(null);
  // Get the current song ID and user data from Redux store
  const songId = useSelector((state: RootStateOrAny) => state.song.song.id)
  const user = useSelector((state: RootStateOrAny) => state.user.user);

  // Effect hook to fetch songs and initialize the player on song or user data change
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch song list based on username and user ID
        const songs = await SongService.fetchSongList(user.username, user.id);
        console.log(`je suis dans hook ${songs}`);
        // Check if a specific song ID is provided
        if (songId !== undefined) {
          // Find the song object matching the song ID
          const song = songs.find(song => song.id === songId);
          console.log(`je suis dans hook ${song}`);
          // If a matching song is found, create a player with that song
          if (song) {
            const newPlayer = createAudioplayer([song], setPlayerState);
            playerRef.current = newPlayer;
            // Cleanup function for the player on component unmount
            return () => {
              if (newPlayer) {
                newPlayer.cleanup();
              }
            };
          }
        } else {
          // If no specific song ID, create a player with the entire song list
          const newPlayer = createAudioplayer(songs, setPlayerState);
          playerRef.current = newPlayer;
          // Cleanup function for the player on component unmount
          return () => {
            if (newPlayer) {
              newPlayer.cleanup();
            }
          };
        }
      } catch (error) {
        console.error(`Error fetching songs: ${error}`);
      }
    };
    loadData();
  }, [songId]);

  // Delegate control functions to the underlying audio player instance

  function setPlaybackPosition(position: number) {
    if (playerRef.current) {
      playerRef.current.setPlaybackPosition(position);
    }
  }

  function toggleShuffle() {
    if (playerRef.current) {
      playerRef.current.toggleShuffle();
    }
  }

  function toggleRepeat() {
    if (playerRef.current) {
      playerRef.current.toggleRepeat();
    }
  }

  function togglePlayPause() {
    if (playerRef.current) {
      playerRef.current.togglePlayPause();
    }
  }

  function playNextTrack() {
    if (playerRef.current) {
      playerRef.current.playNextTrack();
    }
  }

  function playPreviousTrack() {
    if (playerRef.current) {
      playerRef.current.playPreviousTrack();
    }
  }

  function cleanup() {
    if (playerRef.current) {
      playerRef.current.cleanup();
    }
  }

  // Return the combined controls and player state as an object
  return {
    setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
  };
}

export default useAudioPlayer;
