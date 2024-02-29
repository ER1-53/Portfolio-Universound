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
                <img src={song.metadata.coverArtSrc} alt="" className={styles.jacket} />
                <div className={styles.playButton}>
                    <li>
                        <a href ="/cover/play-151523_640.png"> <img src="/cover/play-151523_640.png" alt="" className={styles.player} onClick = togglePlayButton /></a>
                    </li>
                </div>
                <header>
                <h4>{song.metadata.title}</h4>
                <p>{song.metadata.album}</p>
                </header>
            </div>
            </div>
    );
}
export default SongCover;
