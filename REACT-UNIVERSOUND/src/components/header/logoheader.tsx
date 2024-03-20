import React, { FunctionComponent } from "react";
import styles from './header.module.css'

const LogoHeader: FunctionComponent = () => {

    return (
            <div>
                <div className={styles.logo + " " + styles.logo_header}></div>
            </div>
    );
};

          export default LogoHeader;
