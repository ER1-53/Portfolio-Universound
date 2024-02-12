import React, { FunctionComponent, useEffect, useState } from 'react';
import Song from './models/song';
import SONGS from './models/mock-song';
import SongListHistoric from './components/main/songPageBox/song-list-historic';
import Footer from './components/footer/footer';
import SearchBar from './components/main/songPageBox/search/search';
import AsideBox from './components/asideBox/asideBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/headerLog';
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
        <Header />
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
