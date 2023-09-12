import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import ProfileInfo from "./../Profile/ProfileInfo/ProfileInfo"
// props.totalUsersCount заменил на 300 (ровно на 1 полную строку), т.к. это слишком большое число и в текущей реализации пагинации выводит ололо страниц (подобрал под полную ширину) и добавил  &nbsp; в 22 строку (если пробел, то перед 1 ничего не выводится), чтобы не слипались цифры. Т.к. это сделано принудительно, то 49я страница все равно заполняется полностью (пользователей же в базу скачано гораздо больше 195)

let Users = (props) => {

    let pagesCount = Math.ceil(300 / props.pageSize);

    let pages = [" "];
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i);
    }

    return <div className={styles.osn}>
        <div className={styles.prf}><ProfileInfo /></div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>&nbsp;{p}</span>
            })}
        </div>
        <div className={styles.osn}>
            {
                props.users.map(u => <div key={u.id} className={styles.dis}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto} alt='' />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div className={styles.selectedPage}>{u.name}</div>
                        <div>{u.status === null ? "status: undefined " : 'status: ' + u.status.substring(0, 10)} </div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Users;