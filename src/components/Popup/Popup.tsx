import React from 'react';
import './Popup.css';
import {useFormValidation} from "../../hooks/useFormValidation";

interface IPopupProps {
  isOpenPopup: boolean,
  onClose: () => void,
  isLoadingComment: boolean,
  onSubmitComment: (values: { name?: string, comment?: string }, id: number) => void, //TODO ?
  currentOriginSizeImage: {
    id?: number,
    url?: string
  },
  comments: {
    id: number,
    text: string,
    date: string
  }[]
}

const Popup: React.FC<IPopupProps> = (
  {
    isOpenPopup,
    onClose,
    isLoadingComment,
    onSubmitComment,
    currentOriginSizeImage,
    comments
  }) => {

  const {values, errors, isValid, handleChange, resetForm} = useFormValidation();
console.log('popup')
  React.useEffect(() => {
    resetForm();
  }, [comments, resetForm]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (values.name === '' || values.comment === '') {
      return;
    }
    onSubmitComment(values, currentOriginSizeImage.id!); //TODO !
  }

  return (
    <div className={`popup ${isOpenPopup && "popup_opened"}`} onClick={onClose} role="button" tabIndex={-1}
         aria-hidden="true">
      <div className="popup__container" onClick={(e) => e.stopPropagation()} role="complementary" tabIndex={-1}
           aria-hidden="true">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__img" src={currentOriginSizeImage.url} alt="Картинка"/>
        <div className="popup__comments-container">
          {comments.map((comment) => (
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
            disabled={isLoadingComment || !isValid}
          >{`${isLoadingComment ? 'Добавление комментария' : 'Оставить комментарий'}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Popup);

