import React from 'react';
import s from './Post.module.css';
// заменил УРЛ картинки, т.к. ссылка на родную уже не актуальна и стало не красиво
function Post(props) {
  return (
    <div className={s.item}>
      <img src='https://www.emojiworld.ru/img/emojis/smiling-face-with-sunglasses_1f60e.png' alt=' ' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;