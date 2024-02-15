import React, { FunctionComponent, useEffect, useState} from "react";
import styles from './listBox.module.css'
import ListingSong from "./listingBox/listingSong";
import Song from "../../../models/song";
import SONGS from "../../../models/mock-song";

const ListBox: FunctionComponent = () => {
    const [song, setSong] = useState<Song[]>([]);

    useEffect(() => {
        setSong(SONGS);
    }, []);


    return (
        <div>
            <section className={styles.selection}>
                <h2>Liked Music</h2>
                {song.map(song => (
                <ListingSong key={song.id} song={song} />
                ))}
            </section>
            </div>

    )
}

export default ListBox;