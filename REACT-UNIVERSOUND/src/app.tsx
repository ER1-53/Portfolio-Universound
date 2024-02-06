import React, { FunctionComponent, useEffect, useState } from 'react';
import Song from './models/song';
import SONGS from './models/mock-song';
import SongListHistoric from './pages/main/songPage/song-list-historic';
import Footer from './components/footer/footer';
import SearchBar from './components/main/search/search';
import AsideBox from './pages/aside/asideBox';
import { Link } from 'react-router-dom';
/* Mise en place pour la version 3
import SongLexicalFieldList from './pages/mainV3/song-lexical-field-list';
import SongTypeList from './pages/mainV3/song-type-list';
import SongRhithmList from './pages/mainV3/song-rhithm-list';
import SongListHistoric from './pages/mainV3/song-list-historic';
SongListHistoric change sur une ligne de 5 elements en V3
*/
  
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
          <a href=""><div className="logo logo_header"></div></a>
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
      <AsideBox/>
      <main className="main">
        <div className="searchBox">
          <SearchBar />
        </div>
        <SongListHistoric />
        <section className="yourStyle">
         {/*Mise en place pour la version 3
         <SongLexicalFieldList />
         <SongRhithmList />
         <SongTypeList />
         */}
        </section>
      </main>
    </div>
    <footer className="footer">
      <Footer />
      <p>create By Team Sound for Holberton</p>
    </footer>
  </div>
 );
}
  
export default App;