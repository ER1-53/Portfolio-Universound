import React, { FunctionComponent} from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styles from './welcome.module.css';

const WelcomeUser: FunctionComponent = () => {

  const user = useSelector((state: RootStateOrAny) => state.user.user)
  const username = user.username
  console.log(`je suis dans welcome ${user.username}`)

  return (
    <div className={styles.userName}>
      {username}
    </div>
  );
};

export default WelcomeUser;
