import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer';
import SearchBar from '../../components/main/search/search';
import AsideBox from '../../components/asideBox/asideBox';
import LogoHeader from '../../components/header/logoheader';
import styles from './playlist.module.css'
import PlaylistBox from '../../components/main/playlistBox/playlistBox';


const Playlist: FunctionComponent = () => {

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
        <PlaylistBox />
      </main>
    </div>
      <Footer />
  </div>
 );
}

export default Playlist;
