import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer';
import SearchBar from '../../components/main/search/search';
import AsideBox from '../../components/asideBox/asideBox';
import LogoHeader from '../../components/header/logoheader';
import styles from './likePage.module.css'
import ListBox from '../../components/main/likepageBox/listBox';
import HeaderDisLog from '../../components/header/headerDisLog';

const LikePage: FunctionComponent = () => {

 return (
    <div >
      <div className={styles.title}>
          <HeaderDisLog />
      </div >
    <div className={styles.big_box}>
      <AsideBox/>
      <main className={styles.main}>
        <div className={styles.searchBox}>
          <SearchBar />
        </div>
        <ListBox />
      </main>
    </div>
      <Footer />
  </div>
 );
}

export default LikePage;
