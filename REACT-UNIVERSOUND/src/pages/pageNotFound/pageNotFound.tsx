import React, { FunctionComponent} from "react";
import { Link } from "react-router-dom";
import styles from './pageNotFound.module.css'

const PageNotFound: FunctionComponent = () => {

    return (
        <div className={styles.notfound}>
            <Link to="/songpage">-- Retourner à vos musiques --</Link>
            <img src="../cover/notfound3.png" alt="" />
            <h1>Oups!</h1>
            <h1>Ça sonne creux !</h1>
        </div>
    );
}

export default PageNotFound;
