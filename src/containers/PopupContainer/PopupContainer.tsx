import React from 'react';
// import {connect} from 'react-redux'
import Popup from '../../components/Popup/Popup';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
// import {setIsLoadingComment} from "../../redux/actions/popupActions";
// import {setComments} from "../../redux/actions/photoGridActions";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";

interface IPopupContainer {
  onClose: () => void,
}

const PopupContainer: React.FC<IPopupContainer> = ({onClose}) => {

  const main = useAppSelector(state=> state.main);
  const popup = useAppSelector(state=> state.popup);
  const photoGrid = useAppSelector(state=> state.photoGrid);
  const {setIsLoadingComment, setComments} = useAppDispatch();

  function handleSubmitComment(values: { name?: string, comment?: string }, id: number) {
    setIsLoadingComment(true);
    return mainApi.setNewComment({
      id: id,
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
};

// const mapStateToProps = (store) => ({
//   photoGrid: store.photoGrid,
//   popup: store.popup,
//   main: store.main,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   setIsLoadingComment: (isLoadingBool) => dispatch(setIsLoadingComment(isLoadingBool)),
//   setComments: (commentsArr) => dispatch(setComments(commentsArr))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PopupContainer);

export default PopupContainer;
