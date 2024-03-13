import React, { FunctionComponent, useState, useEffect } from "react";
import SONGS from "../../../models/mock-song";
import SongCover from "./coverBox/song-cover";
import Song from "../../../models/song";
import styles from './songList.module.css'

interface SongListHistoricProps {
  songs: Song[]

}

const SongListHistoric: FunctionComponent<SongListHistoricProps> = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    setSongs(SONGS);
  }, []);

  const lastSongs = songs.slice(Math.max(songs.length - 10, 0));

  const handleButtonClick = (song : Song) => {
    console.log("Button clicked for song with ID:", song.id)
    SONGS.find((s) => s.id === song.id);
  };

  return (
    <section className={styles.selection}>
      <header className={styles.titleBox}><h3>Your Sound</h3></header>
      <nav className={styles.nav_sounds_selection}>
        {lastSongs.map(song => (
                <SongCover key={song.id} song={song} onClick={handleButtonClick}/>

            ))}
      </nav>
    </section>
    );
  }

export default SongListHistoric;
