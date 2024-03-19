import React, { FunctionComponent, useEffect, useState} from "react";
import styles from './listBox.module.css'
import ListingSong from "./listingBox/listingSong";
import Song from "../../../models/song";
import SongService from "../../../service/song_service";
import { RootStateOrAny, useSelector } from "react-redux";

const ListBox: FunctionComponent = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const user = useSelector((state: RootStateOrAny) => state.user.user);

    console.log(`je suis dans list box ${user.id} `)
    console.log(`je suis userid: ${user.id} dans songlist`);

    useEffect(() => {
        SongService.fetchSongList(user.username, user.id)
        .then((songs) => setSongs(songs))
    }, []);


    return (
        <div className={styles.sectionBox}>
            <section className={styles.selection}>
                <h2>List</h2>
                <div className={styles.tables}>
                {songs.map(song => (
                <ListingSong key={song.id} song={song} />
                ))}
                </div>
            </section>
            </div>

    )
}

export default ListBox;
