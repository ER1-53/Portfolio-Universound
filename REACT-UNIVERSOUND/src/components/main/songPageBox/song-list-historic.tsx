import React, { FunctionComponent, useState, useEffect } from "react";
import SongCover from "./coverBox/song-cover";
import Song from "../../../models/song";
import styles from './songList.module.css'
import SongService from "../../../service/song_service";
import { useSelector, RootStateOrAny } from "react-redux";
import { isEmpty } from "../../../service/isEmpty";

  const SongListHistoric: FunctionComponent = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const user = useSelector((State: RootStateOrAny) => State.user.user)
  console.log(`je suis userid: ${user.id} dans songlist`);
  console.log(`je suis username: ${user.username} dans songlist`);
  useEffect(() => {
    SongService.fetchSongList(user.username, user.id)
    .then((songs) => setSongs(songs))
  }, []);

  const lastSongs = songs.slice(Math.max(songs.length - 50, 0));
  console.log(`je suis apres useeffect de songlist ${songs}`)

  return (
    <section className={styles.selection}>
      <header className={styles.titleBox}><h3>Your Sound</h3></header>
      <nav className={styles.nav_sounds_selection}>
        {!isEmpty(lastSongs) &&
          lastSongs.map(song => (
            <SongCover key={song.id} song={song}/>
          ))}
      </nav>
    </section>
  );
}

export default SongListHistoric;
