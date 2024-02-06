import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {

    return (
        <div className="title">
        <div>
            <Link to="/"><div className="logo logo_header"></div></Link>
        </div>
        <nav className="nav_profil">
            <ul className="nav_profil_ul">
            <li><Link to="/loader_page"><i className="fa-regular fa-user fa-lg">Account</i></Link></li>
            <li><Link to="/signup"><i className="fa-solid fa-right-to-bracket fa-lg">Sign Up</i></Link></li>
            <li><Link to="/sounds_page"><i className="fa-solid fa-right-to-bracket fa-lg">Standard</i></Link></li>
            </ul>
        </nav>
        </div>
    );
};
          
          export default Header;