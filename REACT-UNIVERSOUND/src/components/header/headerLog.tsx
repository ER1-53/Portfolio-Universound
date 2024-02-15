import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';
import LogoHeader from "./logoheader";
import styles from "./header.module.css"


const Header: FunctionComponent = () => {

    return (
            <div className={styles.title}>
                <LogoHeader />
            <nav className={styles.nav_profil}>
                <ul className={styles.nav_profil_ul}>
                <li><Link to="/login"><i className="fa-regular fa-user fa-lg">Account</i></Link></li>
                <li><Link to="/signup"><i className="fa-solid fa-right-to-bracket fa-lg">Sign Up</i></Link></li>
                </ul>
            </nav>
            </div>
    );
};

export default Header;
