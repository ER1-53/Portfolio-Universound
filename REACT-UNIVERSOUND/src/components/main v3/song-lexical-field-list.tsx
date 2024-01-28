import React, { FunctionComponent, useState, useEffect } from "react";
import SONGS from "../../models/mock-song";
import SongCover from "./coverbox/song-cover";
import Song from "../../models/song";

const SongLexicalFieldList: FunctionComponent = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    setSongs(SONGS);
  }, []);

  const lastSongs = songs.slice(Math.max(songs.length - 3, 0));

  return (
     <div className="box_yourstyle">
         <header className="title_box"><h3>Lexical Field</h3></header>
         <nav className="nav_sounds_user nav_sounds_lastlistening">
          {lastSongs.map(song => (
                <SongCover key={song.id} song={song}/>
            ))}
         </nav>
    </div>                 
  );
}

export default SongLexicalFieldList;