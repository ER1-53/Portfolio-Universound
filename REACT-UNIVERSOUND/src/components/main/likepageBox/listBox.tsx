import React, { FunctionComponent, useEffect, useState} from "react";
import styles from './listBox.module.css'
import ListingSong from "./listingBox/listingSong";
import Song from "../../../models/song";
import SongService from "../../../service/song_service";
import { RootStateOrAny, useSelector } from "react-redux";

const ListBox: FunctionComponent = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const userId = useSelector((state: RootStateOrAny) => state.userSId.userId);
    const songId = useSelector((state: RootStateOrAny) => state.addSongAll.songId)
    console.log(`je suis dans list box ${userId} `)
    console.log(`je suis userid: ${userId} dans songlist`);

    useEffect(() => {
      SongService.fetchSongList(userId)
      .then((songs) => setSongs(songs))
    }, []);


    return (
        <div>
            <section className={styles.selection}>
                <h2>Liked Music</h2>
                {songs.map(song => (
                <ListingSong key={song.id} song={song} />
                ))}
            </section>
            </div>

    )
}

export default ListBox;
