import React from "react";
import s from "./../components/Settings/Settings.module.css";


const PROFILE = 'PROFILE';
const MESSAGES = 'MESSAGES';
const USERS = 'USERS';
const AVATARS = 'AVATARS';
// const BACK = 'BACK'; // коментарии в settings.jsx

let PR = <>
    <p>Раздел в  store: profilePage</p>
    <br />
    <ul className={s.text}>
        <li><ul> posts:
            <li>id</li>
            <li>message</li>
            <li>likesCount</li>
        </ul>
        </li>
        <li>newPostText: "it-kamasutra.com"</li>
    </ul>
    profile-reducer.js
</>
let MES = <>
    <p>Раздел в  store: dialogsPage</p>
    <br />
    <ul className={s.text}>
        <li><ul> dialogs:
            <li>id</li>
            <li>name</li>
        </ul>
        </li>
        <li><ul> messages:
            <li>id</li>
            <li>message</li>
        </ul>
        </li>
        <li>newMessageBody: "Enter your messages"</li>
    </ul>
    dialogs-reducer.js
</>
let US = <>
    <p className={s.text}>Раздел в  store: usersPage</p>
    <ul className={s.text}>
        <li><ul> users:
            <li>id</li>
            <li>img</li>
            <li>followed</li>
            <li>status</li>
            <li><ul> location:
                <li>city</li>
                <li>country</li>
            </ul></li>
        </ul></li>
        <li>pageSize: 6</li>
        <li>totalUsersCount: 0</li>
        <li>currentPage: 1</li>
    </ul>
    <p className={s.text}>users-reducer.js</p>
</>
let AV = <>
    <p>Раздел в  store: avatarsPage</p>
    <br />
    <ul className={s.text}>
        <li>id</li>
        <li>users</li>
        <li>pageSize: 100</li>
        <li>totalUsersCount: 0</li>
        <li>currentPage: 1</li>
    </ul>
    avatars-reducer.js
</>
let initialState = {
    pages: [{ id: 'PROFILE' }, { id: 'MESSAGES' }, { id: 'USERS' }, { id: 'AVATARS' }]
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                pages: state.pages.map(u => {
                    if (u.id === action.type)
                        return { ...u, id: PR }
                    else { return u }
                })
            }
        case MESSAGES:
            return {
                ...state,
                pages: state.pages.map(u => {
                    if (u.id === action.type)
                        return { ...u, id: MES }
                    else { return u }
                })
            }
        case USERS:
            return {
                ...state,
                pages: state.pages.map(u => {
                    if (u.id === action.type)
                        return { ...u, id: US }
                    else { return u }
                })
            }
        case AVATARS:
            return {
                ...state,
                pages: state.pages.map(u => {
                    if (u.id === action.type)
                        return { ...u, id: AV }
                    else { return u }
                })
            }
        // case BACK:
        //     let st = [{ id: 'PROFILE'}, { id: 'MESSAGES'}, { id: 'USERS'}, { id: 'AVATARS'} ]
        //     return {
        //         ...state,
        //         pages: st.map(u => {return u})}
        default:
            return state;
    }
}

export const onClickPageAC = (id) => ({ type: id })

export default settingsReducer;