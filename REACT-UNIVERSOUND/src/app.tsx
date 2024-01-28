import React, { FunctionComponent, useEffect, useState } from 'react';
import Song from './models/song';
import SONGS from './models/mock-song';
import SongListHistoric from './components/main/song-list-historic';
/*import SongLexicalFieldList from './components/main/song-lexical-field-list';
import SongTypeList from './components/main/song-type-list';
import SongRhithmList from './components/main/song-rhithm-list';*/
  
const App: FunctionComponent = () => {
    const [songs, setsongs] = useState<Song[]>([]);

    useEffect(() => {
        setsongs(SONGS);
    }, []);
 return (
    <div className="App">
    <header>
      <div className="title">
        <div>
          <div className="logo logo_header"></div>
        </div>
        <nav className="nav_profil">
          <ul className="nav_profil_ul">
            <li><a href="./loader_page.html"><i className="fa-regular fa-user fa-lg">Account</i></a></li>
            <li><a href="./signup.html"><i className="fa-solid fa-right-to-bracket fa-lg">Sign Up</i></a></li>
            <li><a href="./sounds_page.html"><i className="fa-solid fa-right-to-bracket fa-lg">Standard</i></a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="big_box">
      <aside className="aside">
        <nav className="nav">
          <ul className="nav_ul">
            <li><i className="fa-solid fa-house-crack"></i> Home</li>
            <li><i className="fa-regular fa-bookmark"></i> Library</li>
            <li><i className="fa-solid fa-music"></i> Playlist</li>
          </ul>
          <div>
            Place ici le system de chat
          </div>
        </nav>
      </aside>
      <main className="main">
        <div className="searchBox">
          <form>
              <input className="styledSearch searchField" type="search" id="site-search" name="request" />
              <button className="styledSearch">Search</button>
          </form>
        </div>
        <SongListHistoric />
        <section className="yourStyle">
        </section>
      </main>
    </div>
    <footer className="footer">
      <nav className="nav_footer">
        <hr />
        <div className="logo logo_footer"></div>
        <hr />
        <ul className="RGPD box_footer">
          <li>General Condition</li>
          <li>Gestion des Cookies</li>
          <li>Mentions légales</li>
        </ul>
        <hr />
        <ul className="user box_footer">
          <li>Profil</li>
          <li>Last Sound</li>
          <li>Playlist</li>
        </ul>
        <hr />
        <ul className="contact box_footer">
          <li>About Us</li>
          <li>Contact</li>
          <li>Inovation</li>
        </ul>
        <hr />
      </nav>
      <p>create By Team Sound for Holberton</p>
    </footer>
  </div>
 );
}
  
export default App;