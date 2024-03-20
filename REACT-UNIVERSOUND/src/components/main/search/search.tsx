import React, { FunctionComponent, useContext, useState } from 'react';
import Song from '../../../models/song';
import SongService from '../../../service/song_service';
import styles from './search.module.css';
import HistoricService from '../../../service/historic_service';
import { useSelector, RootStateOrAny } from 'react-redux';
import { isEmpty } from '../../../service/isEmpty';
import { RefreshContext } from '../../../service/refresh';


const SearchBar: FunctionComponent = () => {

    const [term, setTerm] = useState<string>('');
    const [songs, setSongs] = useState<Song[]>([]);
    const user = useSelector((State: RootStateOrAny) => State.user.user);
    const { setRefresh } = useContext(RefreshContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const term = e.target.value;
        setTerm(term);

        if(term.length <= 1) {
            setSongs([]);
            return;
        }
        SongService.searchSong(term).then(songs => setSongs(songs));
    }

    const handleSongClick = (song: Song): void => {

        console.log(`dans handlesong ${user.id} ${song.id}`)
        HistoricService.addUserSong(user.id, song.id)
        .then(() => {
            console.log('historique ajouté');
            setRefresh(true);
            setRefresh(false);
          })
            .catch((error) => console.error(error));
    };

    return (
        <div id="soundSearch" className={styles.soundsearch}>
        <form>
            <input placeholder="Search song"  className={styles.styledSearch + " " +styles.searchField} id="site-search" type="text" value={term} onChange={e => handleInputChange(e)} />
        </form>
        {!isEmpty(songs) &&
            songs.map((song: Song) => (
                <div onClick={() => handleSongClick(song)} className={styles.songbox} key={song.id}>
                <img className={styles.cover} src={song.metadata.coverArtSrc} alt="album cover" />
                <div className={styles.box}>
                    <h3>{song.metadata.title}</h3>
                    <h4>{song.metadata.artist}</h4>
                </div>
                </div>
        ))}
        </div>
    );
};


export default SearchBar;
