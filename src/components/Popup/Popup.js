import React from 'react';
import './Popup.css';
import {useFormValidation} from "../../hooks/useFormValidation";

const Popup = React.memo((
  {
    isPopupOpen,
    onClose,
    onOpen,
    onSubmit,
    isLoadingComment,
    onSubmitComment,
    currentOriginSizeImage,
    comments
  }) => {
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (values.name === '' || values.comment === '') {
      return;
    }
    onSubmitComment(values, currentOriginSizeImage.id);
    resetForm();
  }

  return (
    <div className={`popup ${isPopupOpen && "popup_opened"}`} onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__img" src={currentOriginSizeImage.url} alt="Картинка"/>
        <div className="popup__comments-container">
          {comments.map((comment, index) => (
            <div key={comment.id} className="popup__comment-container">
              <p className="popup__comment popup__comment_type_date">{comment.date}</p>
              <p className="popup__comment">{comment.text}</p>
            </div>
          ))}
        </div>
        <form className="popup__form" action="#" noValidate method="get" onSubmit={handleSubmit}>
          <span
            className={`popup__form-error ${isValid && 'popup__form-error_hide'}`}
          >{errors.name || ''}</span>
          <input
            name="name"
            className="popup__form-input"
            type="text"
            placeholder="Ваше имя"
            value={values.name || ''}
            onChange={handleChange}
            required
            minLength="1"
            maxLength="200"
            pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s\-]+$"
          />
          <span
            className={`popup__form-error ${isValid && 'popup__form-error_hide'}`}
          >{errors.comment || ''}</span>
          <input
            name="comment"
            className="popup__form-input"
            type="text"
            placeholder="Ваш комментарий"
            value={values.comment || ''}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="200"
            pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s\-]+$"
          />
          <button
            className="popup__form-button"
            type="submit"
            disabled={isLoadingComment || !isValid}
          >{`${isLoadingComment ? 'Добавление комментария' : 'Оставить комментарий'}`}
          </button>
        </form>
      </div>
    </div>
  );
});

export default Popup;
