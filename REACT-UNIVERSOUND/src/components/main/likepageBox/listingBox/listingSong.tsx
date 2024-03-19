import React, { FunctionComponent } from "react";
import Song from "../../../../models/song";
import styles from './listingSong.module.css'


type Props = {
    song: Song
};

const ListingSong: FunctionComponent<Props> = ({song}) => {

    return (
        <table className={styles.likelist}>
            <tbody>
            <tr className={styles.elementlist}>
                <td><img className={styles.likepics} src={song.metadata.coverArtSrc} alt="dj" /></td>
                <td>
                <p><strong>Titre : </strong>{song.metadata.title}</p>
                <p><strong>Auteur : </strong>{song.metadata.artist}</p>
                <p><strong>Album : </strong>{song.metadata.album}</p>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default ListingSong;
