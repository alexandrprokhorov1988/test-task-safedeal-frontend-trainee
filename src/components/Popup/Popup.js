import React from 'react';
import './Popup.css';
import img1 from '../../images/Rectangle1.png';

function Popup() {

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button" type="button"/>
        <img className="popup__img" src={img1} alt="Картинка"/>
        <div className="popup__comments-container">
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
          <div className="popup__comment-container">
            <p className="popup__comment popup__comment_type_date">18.12.2019</p>
            <p className="popup__comment">Я тут был, очень понравилось</p>
          </div>
        </div>
        <form className="popup__form" action="#" noValidate method="get">
          <input className="popup__form-input" type="text" placeholder="Ваше имя"/>
          <input className="popup__form-input" type="text" placeholder="Ваш комментарий"/>
          <button className="popup__form-button" type="submit">Оставить комментарий</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
