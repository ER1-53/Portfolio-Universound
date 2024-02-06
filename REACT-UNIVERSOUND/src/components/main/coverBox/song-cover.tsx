import React, { FunctionComponent} from "react";
import Song from "../../../models/song";

type Props = {
    song: Song
}

const SongCover: FunctionComponent<Props> = ({song}) => {

    return (
            <div className="SoundBox">
            <div className="jacket_box">
                <img src={song.picture} alt="" className="jacket" />
                <img src="images/play-151523_640.png" alt="" className="player" />
                <header>
                <h4>{song.track}</h4>
                <p>{song.album}</p>
                </header>
            </div>
            </div>                                   
    );
}
export default SongCover;