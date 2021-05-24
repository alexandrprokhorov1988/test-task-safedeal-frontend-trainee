import React from 'react';
import {connect} from 'react-redux'
import Popup from '../../components/Popup/Popup';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {setIsLoadingComment} from "../../redux/actions/popupActions";
import {setComments} from "../../redux/actions/photoGridActions";

function PopupContainer(
  {
    photoGrid,
    main,
    popup,
    setIsLoadingComment,
    onClose,
    setComments
  }) {

  function handleSubmitComment(values, imageId) {
    setIsLoadingComment(true);
    return mainApi.setNewComment({
      id: imageId,
      name: values.name,
      comment: values.comment
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

  return (
    <Popup
      isOpenPopup={main.isOpenPopup}
      onClose={onClose}
      isLoadingComment={popup.isLoadingComment}
      onSubmitComment={handleSubmitComment}
      currentOriginSizeImage={photoGrid.currentOriginSizeImage}
      comments={photoGrid.comments}
    />
  );
}

const mapStateToProps = (store) => ({
  photoGrid: store.photoGrid,
  popup: store.popup,
  main: store.main,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoadingComment: (isLoadingBool) => dispatch(setIsLoadingComment(isLoadingBool)),
  setComments: (commentsArr) => dispatch(setComments(commentsArr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupContainer);
