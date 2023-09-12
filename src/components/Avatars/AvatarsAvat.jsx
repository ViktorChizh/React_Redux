import React from 'react';
import { Link } from 'react-router-dom'
import s from './Avatars.module.css';

const AvatarsAvat = (props) => {
    return (
        <div className={s.osn}>
            {
                <div className={s.dis}>
                    {props.avat.map(i => {
                        return (
                            <div key={i} className={s.image}><Link to='#'> <img className={s.image} src={i} alt='' /></Link></div>
                        )
                    }
                    )}
                </div>
            }
        </div>
    )
}

export default AvatarsAvat