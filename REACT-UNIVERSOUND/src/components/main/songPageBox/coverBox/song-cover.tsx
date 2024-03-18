import React, { FunctionComponent} from "react";
import Song from "../../../../models/song";
import styles from './songCover.module.css'
import { useDispatch, useSelector } from "react-redux";

type Props = {
    song: Song
}

const SongCover: FunctionComponent<Props> = ({song}) => {

    const infoSongId = useSelector(state => state)
    const dispatch = useDispatch();

    const handleSongId = () => {
        dispatch({
            type: "song/sendSong",
            payload: song,
        });
    }
    const handlePushLike = () => {
        dispatch({
            type: "addSongsLike/sendAddSongLike",
            payload: song.id,
        });
    }

    return (
            <div className={styles.SoundBox}>
            <div className={styles.jacket_box}>
                <img src={song.metadata.coverArtSrc} alt="" className={styles.jacket} />
                <img onClick={handleSongId} src="/cover/play-151523_640.png" alt="" className={styles.player} />
                <header>
                <h4>{song.metadata.title}</h4>
                <p>{song.metadata.album}</p>
                {/* <div onClick={handlePushLike} className={styles.heart}></div> */}
                </header>
            </div>
            </div>
    );
}
export default SongCover;
