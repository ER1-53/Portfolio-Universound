import React from "react";
import { useDispatch} from 'react-redux';
import { selectMusic, setMetadata } from '../../../../musicSlice';
import Song from "../../../../models/song";
import SONGS from '../../../../models/mock-song';
import styles from './songCover.module.css'


type Props = {
    song: Song;
    onClick: (id:number) => void;
};

const SongCover: React.FC<Props> = ({song, onClick}) => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        onClick(song.id)
        if (song){
        const selectedSong = SONGS.find((s) => s.id === song.id);
        if (selectedSong) {
          dispatch(selectMusic(song.id.toString())); // Conservez la chaîne comme identifiant pour Redux
          dispatch(setMetadata(selectedSong));
          // Envoyez l'ID à l'audio player pour lecture du fichier audio correspondant
          // audioPlayer.playMusic(id);
        }
    }
};

    return (
        <div className={styles.SoundBox}>
            <div className={styles.jacket_box}>
                <img src={song.metadata.coverArtSrc} alt="" className={styles.jacket} />
                <header>
                    <h4>{song.metadata.title}</h4>
                    <p>{song.metadata.album}</p>
                </header>
                <button onClick={handleButtonClick}>Select song</button> {/* Add this button element */}
            </div>
        </div>
    );
}
export default SongCover;
