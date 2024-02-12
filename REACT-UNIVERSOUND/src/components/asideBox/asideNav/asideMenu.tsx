import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './asideMenu.module.css'

const Home = () => <h2>Accueil</h2>;
const Library = () => <h2>Bibliothèque</h2>;
const Playlist = () => <h2>Liste de lecture</h2>;

const AsideMenu: FunctionComponent = () => {

    return (
        <Router>
            <ul className={styles.nav_ul}>
                <li>
                    <Link to="/" className={styles.nav_link}>
                        <i className="fa-solid fa-house-crack"></i> Home
                    </Link>
                </li>
                <li>
                    <Link to="/library" className={styles.nav_link}>
                        <i className="fa-regular fa-bookmark"></i> Library
                    </Link>
                </li>
                <li>
                    <Link to="/playlist" className={styles.nav_link}>
                        <i className="fa-solid fa-music"></i> Playlist
                    </Link>
                </li>
            </ul>

            <Route path="/" exact component={Home} />
            <Route path="/library/" component={Library} />
            <Route path="/playlist/" component={Playlist} />
        </Router>
    );
}

export default AsideMenu;
