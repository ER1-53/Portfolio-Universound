import React, { FunctionComponent, useEffect, useState } from 'react';
import Song from '../../models/song';
import SONGS from '../../models/mock-song';
import SongListHistoric from '../../components/main/songPageBox/song-list-historic';
import Footer from '../../components/footer/footer';
import SearchBar from '../../components/main/search/search';
import AsideBox from '../../components/asideBox/asideBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../../components/header/headerLog';
import LogoHeader from '../../components/header/logoheader';
import styles from './soundPage.module.css'
/* Mise en place pour la version 3
import SongLexicalFieldList from './pages/mainV3/song-lexical-field-list';
import SongTypeList from './pages/mainV3/song-type-list';
import SongRhithmList from './pages/mainV3/song-rhithm-list';
import SongListHistoric from './pages/mainV3/song-list-historic';
SongListHistoric change sur une ligne de 5 elements en V3
*/

const SoundPage: FunctionComponent = () => {
    const [songs, setsongs] = useState<Song[]>([]);

    useEffect(() => {
        setsongs(SONGS);
    }, []);
 return (
    <div >
      <div className={styles.title}>
          <LogoHeader />
      </div >
    <div className={styles.big_box}>
      <AsideBox/>
      <main className={styles.main}>
        <div className={styles.searchBox}>
          <SearchBar />
        </div>
        <SongListHistoric />
        <section className={styles.yourStyle}>
         {/*Mise en place pour la version 3
         <SongLexicalFieldList />
         <SongRhithmList />
         <SongTypeList />
         */}
        </section>
      </main>
    </div>
      <Footer />
  </div>
 );
}

export default SoundPage;
