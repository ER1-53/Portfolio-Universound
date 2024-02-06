import React, { FunctionComponent } from "react";
import AsideMenu from "../../components/aside/asideMenu";

const AsideBox: FunctionComponent = () => {
    
    return (
        <aside className="aside">
        <nav className="nav">
            <AsideMenu />
          <div>
            {/*<ChatBox /> mise en place pour la version 2*/}
          </div>
        </nav>
      </aside>
    );
}

export default AsideBox;