import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';
import LogoHeader from "./logoheader";
import styles from "./header.module.css"
import WelcomeUser from "./headerConnex/welcome";


const HeaderDisLog: FunctionComponent = () => {

    return (
            <div className={styles.title}>
                <LogoHeader />
            <nav className={styles.nav_profil}>
                <ul className={styles.nav_profil_ul}>
                    <WelcomeUser />
                  <li><Link to="/"><i className="fa-solid fa-right-to-bracket fa-lg">Disconnect</i></Link></li>
                </ul>
            </nav>
            </div>
    );
};

export default HeaderDisLog;
