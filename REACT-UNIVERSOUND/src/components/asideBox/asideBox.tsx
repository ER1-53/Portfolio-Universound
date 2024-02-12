import React, { FunctionComponent } from "react";
import AsideMenu from "./asideNav/asideMenu";
import styles from './asideBox.module.css'

const AsideBox: FunctionComponent = () => {

    return (
        <aside className={styles.aside}>
        <nav className={styles.nav}>
            <AsideMenu />
          <div>
            {/*<ChatBox /> mise en place pour la version 2*/}
          </div>
        </nav>
      </aside>
    );
}

export default AsideBox;
