import React from "react";
import styles from './songInfo.module.css'

type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
  isPlaying: boolean;
};

const SongInfo = ({ title, artist, coverArtSrc, isPlaying  }: SongInfoProps) => {
  return (
    <div className={styles.boxInfoSong}>
      <img
        className={isPlaying ? styles.turning : styles.notTurning}
        width={180}
        height={180}
        src={coverArtSrc}
      />
      <div>
        <div className={styles.title + " " + styles.infoSong}>{title}</div>
        <div className={styles.artist + " " + styles.infoSong}>{artist}</div>
      </div>
    </div>
  );
};

export default SongInfo;
