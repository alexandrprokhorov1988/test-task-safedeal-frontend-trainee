import React from 'react';
import {observer} from "mobx-react-lite";
import './Popup.css';
import {useFormValidation} from "../../hooks/useFormValidation";
import popup from '../../stores/popupStore/popup';
import app from '../../stores/appStore/app';

type PopupProps = {
  /**
   * Popup handleClose.
   */
  onClose: () => void;
}

/**
 * Popup component.
 */
const Popup: React.FC<PopupProps> = observer(({onClose}) => {

  const {values, errors, isValid, handleChange, resetForm} = useFormValidation();

  console.log('popup');  // todo del

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (values.name === '' || values.comment === '') {
      return;
    }
    popup.setNewComment(popup.originSizeImage.id!, values.name!, values.comment!, resetForm);

  }

  return (
    <div className={`popup ${app.isOpenPopup ? "popup_opened" : ""}`} onClick={onClose} role="button" tabIndex={-1}
         aria-hidden="true">
      <div className="popup__container" onClick={(e) => e.stopPropagation()} role="complementary" tabIndex={-1}
           aria-hidden="true">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__img" src={popup.originSizeImage.url} alt="Картинка"/>
        <div className="popup__comments-container">
          {popup.comments && popup.comments.map((comment) => (
            <div key={comment.id} className="popup__comment-container">
              <p className="popup__comment popup__comment_type_date">{comment.date}</p>
              <p className="popup__comment">{comment.text}</p>
            </div>
          ))}
        </div>
        <form className="popup__form" action="#" noValidate method="get" onSubmit={handleSubmit}>
          <span
            className={`popup__form-error ${!errors.name && 'popup__form-error_hide'}`}
          >{errors.name || ''}</span>
          <input
            name="name"
            className="popup__form-input"
            type="text"
            placeholder="Ваше имя"
            value={values.name || ''}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={200}
            pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s\-]+$"
          />
          <span
            className={`popup__form-error ${!errors.comment && 'popup__form-error_hide'}`}
          >{errors.comment || ''}</span>
          <input
            name="comment"
            className="popup__form-input"
            type="text"
            placeholder="Ваш комментарий"
            value={values.comment || ''}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={200}
            pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s\-]+$"
          />
          <button
            className="popup__form-button"
            type="submit"
            disabled={popup.isLoadingComment || !isValid}
          >{`${popup.isLoadingComment ? 'Добавление комментария' : 'Оставить комментарий'}`}
          </button>
        </form>
      </div>
    </div>
  );
});

export default React.memo(Popup);

