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
                <img className={styles.likepics} src={song.metadata.coverArtSrc} alt="dj" />
                <div>
                    <p>{song.metadata.title}</p>
                    <p>{song.metadata.artist}</p>
                    <p>{song.metadata.album}</p>
                </div>
            </li>
        </ul>
    )
}

export default PlayListing;