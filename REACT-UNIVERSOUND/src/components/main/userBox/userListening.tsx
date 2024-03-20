import React, { FunctionComponent} from "react";
import User from "../../../models/user";
import styles from './userListening.module.css'
import { useDispatch, useSelector } from "react-redux";

type Props = {
    user: User
}

const UserListening: FunctionComponent<Props> = ({user}) => {

    /* const infoUserId = useSelector(state => state)
    const dispatch = useDispatch();

    const handleSongId = () => {
        dispatch({
            type: "userS/sendUserId",
            payload: user.id,
        });
    } */

    return (
            <div className={styles.SoundBox}>
            <div className={styles.jacket_box}>
                <img /* onClick={handleSongId} */ src="/cover/play-151523_640.png" alt="" className={styles.player} />
                <header>
                  <h4>{user.username}</h4>
                </header>
            </div>
            </div>
    );
}
export default UserListening;
