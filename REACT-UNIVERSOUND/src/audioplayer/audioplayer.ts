import {
  Controls,
  PlaybackState,
  PlayerState,
  Song,
  TrackMetadata,
} from './types';

export function createAudioplayer(
  SONGS: Song,
  onStateChange: (state: PlayerState) => void,
): Controls {
  let currentTrackIndex = 0;
  let repeat = false;
  let shuffle = false;
  const playbackHistory: Array<number> = [];
  const audioElement: HTMLAudioElement = new Audio();

  /* === Player State Management === */

  // Emit updated player state to callback function
  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  // Compute current player state object
  function computeCurrentPlayerState(): PlayerState {
    return {
      currentTrackMetadata: getCurrentTrackMetadata(),
      currentTrackDuration: getCurrentTrackDuration(),
      currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
      playbackState: getPlaybackState(),
      repeat,
      shuffle,
    };
  }

  // Get metadata for the current track
  function getCurrentTrackMetadata(): TrackMetadata | null {
    if (currentTrackIndex < SONGS.length) {
      return SONGS[currentTrackIndex].metadata;
    } else {
      return null;
    }
  }

  // Get duration of the current track (if loaded)
  function getCurrentTrackDuration(): number | null {
    return isNaN(audioElement.duration) ? null : audioElement.duration;
  }

  // Get current playback position within the track (if loaded)
  function getCurrentTrackPlaybackPosition(): number | null {
    return isNaN(audioElement.currentTime) ? null : audioElement.currentTime;
  }

  // Get the current playback state (playing or paused)
  function getPlaybackState(): PlaybackState {
    return audioElement.paused ? 'PAUSED' : 'PLAYING';
  }


  /* === Event Listeners for Audio Element === */

  // Set up event listeners for the audio element
  function setupAudioElementListeners() {
    audioElement.addEventListener('playing', emitCurrentPlayerState);
    audioElement.addEventListener('pause', emitCurrentPlayerState);
    audioElement.addEventListener('ended', onCurrentTrackEnded);
    audioElement.addEventListener('timeupdate', emitCurrentPlayerState);
    audioElement.addEventListener('loadeddata', emitCurrentPlayerState);
  }

  // Remove event listeners from the audio element
  function removeAudioElementListeners() {
    audioElement.removeEventListener('playing', emitCurrentPlayerState);
    audioElement.removeEventListener('pause', emitCurrentPlayerState);
    audioElement.removeEventListener('ended', onCurrentTrackEnded);
    audioElement.removeEventListener('timeupdate', emitCurrentPlayerState);
    audioElement.removeEventListener('loadeddata', emitCurrentPlayerState);
  }

  // Handle the end of the current track
  function onCurrentTrackEnded() {
    if (repeat) {
      replayCurrentTrack();
    } else {
      playNextTrack();
    }
  }

  /* === Track handling functions === */

  // Replay the current track from the beginning
  function replayCurrentTrack() {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  // Load a specific track by index
  function loadTrack(index: number) {
    audioElement.src = SONGS[index].audioSrc;
    audioElement.load();
    currentTrackIndex = index;
  }

  // Calculate the index of the next track based on shuffle mode
  function computeNextTrackIndex(): number {
    return shuffle ? computeRandomTrackIndex() : computeSubsequentTrackIndex();
  }

  // Calculate the index of the next track in the playlist order
  function computeSubsequentTrackIndex(): number {
    return (currentTrackIndex + 1) % SONGS.length;
  }

  // Calculate a random track index excluding the current track
  function computeRandomTrackIndex(): number {
  if (SONGS && SONGS.length === 1) return 0;
  const index = SONGS ? Math.floor(Math.random() * (SONGS.length - 1)) : 0;
  return SONGS && index < currentTrackIndex ? index : index + 1;
}


  /* === Initialization and Cleanup === */

  // Initialize the audio player
  function init() {
    // Set up event listeners for the audio element
    setupAudioElementListeners();
    // Load the first track in the playlist
    loadTrack(0);
  }

  // Clean up the audio player resources
  function cleanup() {
    // Remove event listeners from the audio element
    removeAudioElementListeners();
    // Pause playback
    audioElement.pause();
  }


  /* === Controls === */

  // Set the playback position within the current track
  function setPlaybackPosition(position: number) {
    if (isNaN(position)) return;
    // Set the current time of the audio element
    audioElement.currentTime = position;
  }

  // Toggle shuffle mode on/off
  function toggleShuffle() {
    shuffle = !shuffle; // Invert the current shuffle state
    // Emit an updated player state
    emitCurrentPlayerState();
  }

  // Toggle repeat mode on/off
  function toggleRepeat() {
    repeat = !repeat; // Invert the current repeat state
    // Emit an updated player state
    emitCurrentPlayerState();
  }

  // Play the next track in the playlist or shuffle order
  function playNextTrack() {
    // Add the current track index to playback history
    playbackHistory.push(currentTrackIndex);
    // Calculate the next track index based on shuffle mode
    const nextTrackIndex = computeNextTrackIndex();
    // Load and play the next track
    loadTrack(nextTrackIndex);
    audioElement.play();
  }

  // Play the previous track in the playback history
  function playPreviousTrack() {
    // Check if there's playback history or enough time elapsed
    if (playbackHistory.length === 0 || audioElement.currentTime > 5) {
      replayCurrentTrack(); // Replay the current track from the beginning
    } else {
      // Get the previous track index from playback history
      const previousTrackIndex = playbackHistory.pop();
      // Load and play the previous track
      loadTrack(previousTrackIndex!);
      audioElement.play();
    }
  }

  // Toggle play/pause state of the audio element
  function togglePlayPause() {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  // Call the initialization function to start the player
  init();

  // Return the available control functions as an object
  return {
    setPlaybackPosition,
    toggleShuffle,
    toggleRepeat,
    playNextTrack,
    playPreviousTrack,
    togglePlayPause,
    cleanup,
  };
}
