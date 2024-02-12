import React, { FunctionComponent } from "react";
import Song from "../../../../models/song";
import styles from './listingSong.module.css'

type Props = {
    song: Song
};

const ListingSong: FunctionComponent<Props> = ({song}) => {
    
    return (
        <ul className={styles.likelist}>
            <li className={styles.elementlist}>
                <img className={styles.likepics} src={song.picture} alt="dj" />
                <p><strong>Titre : </strong>{song.track}</p>
                <p><strong>Auteur : </strong>{song.artiste}</p>
                <p><strong>Album : </strong>{song.album}</p>
                <p><strong>Durée : </strong>{song.time}</p>
                <div className={styles.boxajout + " " + styles.croix}></div>
                <div className={styles.boxajout + " " + styles.coeur}></div>
            </li>
        </ul>
    )
}

export default ListingSong;