import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './header.module.css'

const LogoHeader: FunctionComponent = () => {

    return (
            <div>
                <Link to="/"><div className={styles.logo + " " + styles.logo_header}></div></Link>
            </div>
    );
};
          
          export default LogoHeader;