import React, { FunctionComponent } from "react";
import Song from "../../../../models/song";
import styles from './playlisting.module.css'

type Props = {
    song: Song
};

const PlayListing: FunctionComponent<Props> = ({song}) => {
    
    return (
        <ul className={styles.likelist}>
            <li className={styles.elementlist}>
                <img className={styles.likepics} src={song.picture} alt="dj" />
                <div>
                    <p>{song.track}</p>
                    <p>{song.artiste}</p>
                    <p>{song.album}</p>
                    <p>{song.time}</p>
                </div>
            </li>
        </ul>
    )
}

export default PlayListing;