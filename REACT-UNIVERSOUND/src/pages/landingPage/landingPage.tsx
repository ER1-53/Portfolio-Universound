import React, { FunctionComponent } from 'react';
import Header from '../../components/header/headerLog';
import Footer from '../../components/footer/footer';
import AsideBox from '../../components/asideBox/asideBox';
import {  Link } from 'react-router-dom';
import styles from "./landingPage.module.css"


const LandingPage: FunctionComponent = () => {
  return (

    <div>
      <div>
          <Header />
      </div>
      <div className={styles.big_box}>
      <main className={styles.main}>
          <Link to="/signup"><section className={styles.box_info + " " + styles.box_animate_1}>
            <header>
              <h2>Your style</h2>
            </header>
            <div className={styles.image + " " + styles.image_info1}></div>
          </section></Link>
          <Link to="/signup"><section className={styles.box_info + " " + styles.box_animate_2}>
            <header>
              <h2>Your Sound</h2>
            </header>
            <div className={styles.image + " " + styles.image_info2}></div>
          </section></Link>
          <Link to="/signup" ><section className={styles.box_info + " " + styles.box_animate_3}>
            <header>
              <h2>Your Univers</h2>
            </header>
            <div className={styles.image + " " + styles.image_info3}></div>
          </section></Link>
        </main>
      </div>

        <Footer />


    </div>

  );
};

export default LandingPage;
