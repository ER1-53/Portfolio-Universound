import React, {FunctionComponent} from "react";
import SONGS from '../../../../models/mock-song';
import Song from "../../../../models/song";
import styles from './songCover.module.css'

interface SongCoverProps {
  song: Song;
  onClick: (songWithMetadata:Song & {metadata: any}) =>void;
}

const SongCover:FunctionComponent<SongCoverProps> = ({song, onClick}) => {
    const handleButtonClick = async () => {
      console.log("Button clicked for song with ID:", song.id)
        try {
          // Fetch additional data for the clicked song
          const metadataResponse = await fetch(`api/public/song/${song.id}`) // Replace with your API endpoint
          if (!metadataResponse.ok){
            throw new Error('Error fetching metadata');
          }
          const metadata = await metadataResponse.json();

          // Pass the additional data to the parent component
          onClick({ ...song,metadata });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <div className={styles.SoundBox}>
          <div onClick={handleButtonClick}></div>
            <div className={styles.jacket_box}>
                <img src={song.metadata.coverArtSrc} alt="" className={styles.jacket} />
                <header>
                    <h4>{song.metadata.title}</h4>
                    <p>{song.metadata.album}</p>
                </header>
            </div>
        </div>
    );
}
export default SongCover;
