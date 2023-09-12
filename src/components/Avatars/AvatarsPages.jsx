import React from 'react';
import s from './Avatars.module.css';
import AvatarsAvat from './AvatarsAvat';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
// получаю аватарки зарегистрисовавшихся на сервере людей для просмотра (юзеров без аватарок игнорируем) запрашиваем по 100 пользователей (ограничение сервера) и выводим аватарки. потом переключаемся на другую страницу.

const AvatarsPages = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [" "];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let avat = [];
    props.users.map(i => i.photos.small != null ? avat.push(i.photos.small) : '');


    return (<>
        <ProfileInfo />
        <div className={s.osn}>
            <div className={s.dis}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>&nbsp;{p}</span>
                })}
            </div>
        </div>
        <AvatarsAvat avat={avat} />
    </>)
}

export default AvatarsPages;