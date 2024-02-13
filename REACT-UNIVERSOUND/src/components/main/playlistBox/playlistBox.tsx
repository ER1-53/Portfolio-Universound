import React, { FunctionComponent, useEffect, useState} from "react";
import styles from './playlistBox.module.css'
import PlayListing from "./playBox/playListing";
import Song from "../../../models/song";
import SONGS from "../../../models/mock-song";
import { useHistory } from "react-router-dom";

const PlaylistBox: FunctionComponent = () => {
  const [song, setSong] = useState<Song[]>([]);
  const [playlists, setPlaylists] = useState([{ name: 'funky tool', songs: song }]);
  const history = useHistory();

  useEffect(() => {
    setSong(SONGS);
  }, []);

  const handleAddPlaylist = () => {
    const name = prompt('Entrez le nom de la nouvelle playlist');
    if (name) {
      setPlaylists([...playlists, { name, songs: [] }]);
    }
  };

  const handleAddSong = () => {
    history.push('/likePage');
  };

  return (
    <div className={styles.playBoxSection}>
      <section className={styles.selection}>
        <h2>PlayList</h2>
        <div className={styles.ajoutPlaylist} onClick={handleAddPlaylist}>
          <h6>Créer une nouvelle Playlist</h6>
          <div className={styles.boxajout + " " + styles.croix}></div>
        </div>
        <div className={styles.tablePlaylist}>
        {playlists.map((playlist, index) => (
          <details key={index}>
            <div className={styles.ajoutSong + " " + styles.boxajout + " " + styles.croix} onClick={handleAddSong}></div>
            <summary>{playlist.name}</summary>
            {playlist.songs.map(song => (
              <PlayListing key={song.id} song={song} />
            ))}
          </details>
        ))}
        </div>
      </section>
    </div>
  );
}

export default PlaylistBox;
