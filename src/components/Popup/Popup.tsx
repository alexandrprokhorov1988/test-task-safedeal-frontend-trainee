import React from 'react';
import './Popup.css';
import {useFormValidation} from "../../hooks/useFormValidation";
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";

interface IPopupProps {
  onClose: () => void;
}

const Popup: React.FC<IPopupProps> = ({onClose}) => {

  const {values, errors, isValid, handleChange, resetForm} = useFormValidation();
  const main = useAppSelector(state => state.main);
  const popup = useAppSelector(state => state.popup);
  const photoGrid = useAppSelector(state => state.photoGrid);
  const {setIsLoadingComment, setComments} = useAppDispatch();

  console.log('popup');  //todo del

  React.useEffect(() => {
    resetForm();
  }, [photoGrid.comments, resetForm]);

  function handleSubmitComment( name: string, comment: string , id: number) {
    setIsLoadingComment(true);
    return mainApi.setNewComment({
      id: id,
      name: name,
      comment: comment
    })
      .then(() => {
        const answerFromServer = {
          id: Math.random(),
          text: values.comment,
          date: dateParseFromTimestampToString(new Date().getTime())
        };
        setComments([...photoGrid.comments, answerFromServer]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingComment(false));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (values.name === '' || values.comment === '') {
      return;
    }
    handleSubmitComment(values.name!, values.comment!, photoGrid.currentOriginSizeImage.id!);
  }

  return (
    <div className={`popup ${main.isOpenPopup ? "popup_opened" : ""}`} onClick={onClose} role="button" tabIndex={-1}
         aria-hidden="true">
      <div className="popup__container" onClick={(e) => e.stopPropagation()} role="complementary" tabIndex={-1}
           aria-hidden="true">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__img" src={photoGrid.currentOriginSizeImage.url} alt="Картинка"/>
        <div className="popup__comments-container">
          {photoGrid.comments.map((comment) => (
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
};

export default React.memo(Popup);

