import SongService from '../service/song_service';
import { useState, useRef, useEffect } from 'react';
import { Controls, InitialPlayerState, PlayerState, Song } from './types';
import { createAudioplayer } from './audioplayer';
import { RootStateOrAny, useSelector } from 'react-redux';

interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

function useAudioPlayer(SONG: Song): AudioPlayer {
  const [playerState, setPlayerState] = useState<PlayerState>(InitialPlayerState);
  const playerRef = useRef<Controls | null>(null);
  const songId = useSelector((state: RootStateOrAny) => state.song.song.id)
  const user = useSelector((state: RootStateOrAny) => state.user.user);


  useEffect(() => {
    const loadData = async () => {
      try {
        const songs = await SongService.fetchSongList(user.username, user.id);
        if (songId !== undefined) {
          const song = songs.find(song => song.id === songId);
          console.log(song)
          if (song) {
            const newPlayer = createAudioplayer([song], setPlayerState);
            playerRef.current = newPlayer;
            return () => {
              if (newPlayer) {
                newPlayer.cleanup();
              }
            };
          }
        } else {
          const newPlayer = createAudioplayer(songs, setPlayerState);
          playerRef.current = newPlayer;
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
