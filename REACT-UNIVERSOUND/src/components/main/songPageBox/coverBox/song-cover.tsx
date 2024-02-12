import React, { FunctionComponent} from "react";
import Song from "../../../../models/song";
import styles from './songCover.module.css'

type Props = {
    song: Song
}

const SongCover: FunctionComponent<Props> = ({song}) => {

    return (
            <div className={styles.SoundBox}>
            <div className={styles.jacket_box}>
                <img src={song.picture} alt="" className={styles.jacket} />
                <img src="images/play-151523_640.png" alt="" className={styles.player} />
                <header>
                <h4>{song.track}</h4>
                <p>{song.album}</p>
                </header>
            </div>
            </div>
    );
}
export default SongCover;
