import React from 'react';
import { connect } from 'react-redux'
import Popup from '../../components/Popup/Popup';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {setIsLoadingComment} from "../../redux/actions/popupActions";
// import {setComments, setOriginImage} from "../../redux/actions/photoGridActions";

function PopupContainer(
  {photoGrid,
    popup,
    setComments,
    setIsLoadingComment,
    onClose,
    main,
    onSubmit
  }) {

  // function handleSubmitComment(values, imageId) {
  //   setIsLoadingComment(true);
  //   return mainApi.setNewComment({
  //     id: imageId,
  //     name: values.name,
  //     comment: values.comment
  //   })
  //     .then(() => {
  //       const answerFromServer = {
  //         id: Math.random(),
  //         text: values.comment,
  //         date: dateParseFromTimestampToString(new Date().getTime())
  //       };
  //       setOriginImage([...photoGrid.originImage.comments, answerFromServer]);
  //       // setComments([...photoGrid.comments, answerFromServer]);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoadingComment(false));
  // }

  return (
   <Popup
     isOpenPopup={main.isOpenPopup}
     onClose={onClose}
     isLoadingComment={popup.isLoadingComment}
     onSubmitComment={onSubmit}
     originImage={main.originImage}
   />
  );
}

const mapStateToProps = (store) => ({
  // photoGrid: store.photoGrid,
  popup: store.popup,
  main: store.main,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoadingComment: (isLoadingBool) => dispatch(setIsLoadingComment(isLoadingBool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupContainer);
