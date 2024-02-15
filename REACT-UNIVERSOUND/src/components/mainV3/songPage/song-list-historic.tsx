import React, { FunctionComponent, useState, useEffect } from "react";
import SONGS from "../../../models/mock-song";
import SongCover from "../../main/songPageBox/coverBox/song-cover";
import Song from "../../../models/song";

const SongListHistoric: FunctionComponent = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    setSongs(SONGS);
  }, []);

  const lastSongs = songs.slice(Math.max(songs.length - 5, 0));

  return (
    <section className="selection">
      <header className="title_box"><h3>Your Sound</h3></header>
      <nav className="nav_sounds_selection">
        {lastSongs.map(song => (
                <SongCover key={song.id} song={song}/>
            ))}
       </nav>
    </section>
  );
}

export default SongListHistoric;
