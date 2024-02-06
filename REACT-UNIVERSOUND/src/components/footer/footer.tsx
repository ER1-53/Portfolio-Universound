import React, { FunctionComponent } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
    
    return (
        <Router>
            <nav className="nav_footer">
                <hr />
                <Link to="/"><div className="logo logo_footer"></div></Link>
                <hr />
                <ul className="RGPD box_footer">
                    <li><Link to="/general-condition">General Condition</Link></li>
                    <li><Link to="/cookies">Gestion des Cookies</Link></li>
                    <li><Link to="/legal">Mentions légales</Link></li>
                </ul>
                <hr />
                <ul className="user box_footer">
                    <li><Link to="/profile">Profil</Link></li>
                    <li><Link to="/songPage">Last Sound</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                </ul>
                <hr />
                <ul className="contact box_footer">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/innovation">Inovation</Link></li>
                </ul>
                <hr />
            </nav>
        </Router>
    );
}

export default Footer;