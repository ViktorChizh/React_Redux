/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Header.module.css';

const Header = () => {
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    return <header className={s.header}>
        <img style={{ width: 60 + 'px' }} src='./../../favicon.ico' />
    </header>
}

export default Header;