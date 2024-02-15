import React, { FunctionComponent, useState } from 'react';
import axios from 'axios';
import styles from './search.module.css'
// supprime le commentaire est creer le lien avec la req search spotify

const SearchBar: FunctionComponent = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const SearchSong = async () => {
        const response = await axios.get(
            `https://api.spotify.com/v1/search?q=${search}&type=track`,
            {
                headers: {
                  'Authorization': 'Bearer ' //+ votreToken
                }
              });
          
              setResults(response.data.tracks.items);
            };

    return (
        <div id="soundSearch">
        <form>
            <input className={styles.styledSearch + " " +styles.searchField} id="site-search" type="search" value={search} onChange={e => setSearch(e.target.value)} />
            <button className={styles.styledSearch} onClick={SearchSong}>Rechercher</button>
        </form>
        {/*{results.map(track => (
            <div key={track.id}>
            <img src={track.album.images[0].url} alt="album cover" />
            <p>{track.name} par {track.artists[0].name}</p>
            </div>
        ))}*/}
        </div>
    );
};


export default SearchBar; 
