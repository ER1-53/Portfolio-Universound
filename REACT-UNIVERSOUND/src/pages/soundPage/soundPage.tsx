import React, { FunctionComponent } from 'react';
import SongListHistoric from '../../components/main/songPageBox/song-list-historic';
import SearchBar from '../../components/main/search/search';
import AsideBox from '../../components/asideBox/asideBox';
import styles from './soundPage.module.css'
import AudioPlayer from '../../components/player/audioplayer';
import HeaderDisLog from '../../components/header/headerDisLog';
/* Mise en place pour la version 3
import SongLexicalFieldList from './pages/mainV3/song-lexical-field-list';
import SongTypeList from './pages/mainV3/song-type-list';
import SongRhithmList from './pages/mainV3/song-rhithm-list';
import SongListHistoric from './pages/mainV3/song-list-historic';
SongListHistoric change sur une ligne de 5 elements en V3
*/

const SoundPage: FunctionComponent = () => {

 return (
    <div >
      <div className={styles.title}>
          <HeaderDisLog/>
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
    <div className={styles.fixedSong}>
      
    </div>
  </div>
 );
}

export default SoundPage;
