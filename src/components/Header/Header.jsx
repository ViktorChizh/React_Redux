import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img style={{ width: 60 + 'px' }} src='./../../assets/images/settings.jpg' alt=''/>
    </header>
}

export default Header;