import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './userList.module.css';
import User from "../../../models/user";
import { useSelector, RootStateOrAny } from "react-redux";
import { isEmpty } from "../../../service/isEmpty";
import UserService from "../../../service/user_service";
import UserListening from "./userListening";

  const UserList: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userId = useSelector((state: RootStateOrAny) => state.userSId.userId);

  console.log(`je suis userid: ${userId} dans userlist`);
  useEffect(() => {
    UserService.findAllUser()
    .then((users) => setUsers(users))
  }, []);

  return (
    <section className={styles.selection}>
      <header className={styles.titleBox}><h3>Users</h3></header>
      <nav className={styles.nav_sounds_selection}>
        {!isEmpty(users) &&
          users.map(user => (
            <UserListening key={user.id} user={user} />
          ))}
      </nav>
    </section>
  );
}

export default UserList;
