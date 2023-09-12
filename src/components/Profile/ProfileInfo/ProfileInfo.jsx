import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='' />
            </div>
            <div className={s.descriptionBlock}>
                {/* DESCRIPTION */}
            </div>
        </div>
    )
}

export default ProfileInfo;