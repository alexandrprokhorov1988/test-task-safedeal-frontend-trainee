import React from 'react';
import {observer} from "mobx-react-lite";
import style from './Popup.module.scss';
import {useFormValidation} from "../../hooks/useFormValidation";
import popup from '../../stores/popupStore';
import app from '../../stores/appStore';

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
    <div className={`${style.popup} ${app.isOpenPopup ? style.opened : ""}`} onClick={onClose} role="button" tabIndex={-1}
         aria-hidden="true">
      <div className={style.container} onClick={(e) => e.stopPropagation()} role="complementary" tabIndex={-1}
           aria-hidden="true">
        <button
          className={style.closeButton}
          type="button"
          onClick={onClose}
          data-testid="close-button"
        />
        <img className={style.img} src={popup.originSizeImage.url} alt="Картинка"/>
        <div className={style.commentsContainer}>
          {popup.comments && popup.comments.map((comment) => (
            <div key={comment.id} className={style.commentContainer}>
              <p className={`${style.comment} ${style.commentTypeDate}`}>{comment.date}</p>
              <p className={style.comment}>{comment.text}</p>
            </div>
          ))}
        </div>
        <form className={style.form} action="#" noValidate method="get" onSubmit={handleSubmit}>
          <span
            className={`${style.formError} ${!errors.name ? style.formErrorHide : ""}`}
          >{errors.name || ''}</span>
          <input
            name="name"
            className={style.formInput}
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
            className={`${style.formError} ${!errors.comment ? style.formErrorHide : ""}`}
          >{errors.comment || ''}</span>
          <input
            name="comment"
            className={style.formInput}
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
            className={style.formButton}
            type="submit"
            disabled={popup.isLoadingComment || !isValid}
            data-testid="submit-button"
          >{`${popup.isLoadingComment ? 'Добавление комментария' : 'Оставить комментарий'}`}
          </button>
        </form>
      </div>
    </div>
  );
});

export default React.memo(Popup);

