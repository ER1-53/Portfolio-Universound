import SongService from '../service/song_service';
import { useState, useRef, useEffect } from 'react';
import { Controls, InitialPlayerState, PlayerState, Song } from './types';
import { createAudioplayer } from './audioplayer';

interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

function useAudioPlayer(SONGS: Song): AudioPlayer {
  const [playerState, setPlayerState] = useState<PlayerState>(InitialPlayerState);
  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try { // Remplacez l'URL par l'URL de votre API
        const songs = SongService.fetchSongList();
        const newPlayer = createAudioplayer(await songs, setPlayerState);
        playerRef.current = newPlayer;
        return () => {
          if (newPlayer) {
            newPlayer.cleanup();
          }
        };
      } catch (error) {
        console.error(`Error fetching songs: ${error}`);
      }
    };
    loadData();
  }, []);

    /* const newPlayer = createAudioplayer(SONGS, setPlayerState);
    playerRef.current = newPlayer;
    return () => {
      if (newPlayer) {
        newPlayer.cleanup();
      }
    };
  }, [SONGS]); */

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
