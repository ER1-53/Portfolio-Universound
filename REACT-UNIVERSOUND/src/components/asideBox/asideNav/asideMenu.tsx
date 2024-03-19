import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';
import styles from './asideMenu.module.css'


const AsideMenu: FunctionComponent = () => {

    return (
            <ul className={styles.nav_ul}>
                <li>
                    <Link to="/songpage" className={styles.nav_link}>
                        <i className="fa-solid fa-house-crack"></i> <p>Home</p>
                    </Link>
                </li>
                 <li>
                    <Link to="/likePage" className={styles.nav_link}>
                        <i className="fa-regular fa-bookmark"></i> <p>Music List</p>
                    </Link>
                </li>
                {/*<li>
                    <Link to="/playlist" className={styles.nav_link}>
                        <i className="fa-solid fa-music"></i> Playlist
                    </Link>
                </li> */}
            </ul>
    );
}

export default AsideMenu;
