import React, { FunctionComponent} from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styles from './welcome.module.css';

const WelcomeUser: FunctionComponent = () => {

  const usernameSlice = useSelector((state: RootStateOrAny) => state.usersName.username)
  console.log(`je suis dans welcome ${usernameSlice}`)

  return (
    <div className={styles.userName}>
      {usernameSlice}
    </div>
  );
};

export default WelcomeUser;
