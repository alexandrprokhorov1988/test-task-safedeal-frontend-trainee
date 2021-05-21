import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
import Preloader from '../../components/Preloader/Preloader';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {setIsLoading, setIsLoadingComment, setIsOpenPopup} from "../../redux/actions/mainActions";
import {setCards, setComments, setOriginSizeImage} from "../../redux/actions/cardsActions";

function App(
  {
    cards,
    main,
    setIsOpenPopup,
    setIsLoadingComment,
    setIsLoading,
    setOriginSizeImage,
    setComments,
    setCards
  }) {

  function handlePopupOpen() {
    setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
    document.body.style.overflow = "auto";
  }

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  }

  function handleGetOriginalSizeImage(imageId) {
    if (imageId === cards.currentOriginSizeImage.id) {
      handlePopupOpen();
    } else {
      setOriginSizeImage({});
      return mainApi.getOriginalSizeImage(imageId)
        .then((res) => {
          setOriginSizeImage({
            id: res.id,
            url: res.url
          });
          const newComments = res.comments.map((comment) => ({
            text: comment.text,
            date: dateParseFromTimestampToString(comment.date),
            id: comment.id
          }));
          setComments(newComments);
          handlePopupOpen();
        })
        .catch((err) => console.log(err));
    }
    return true;
  }

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
        setComments([...cards.comments, answerFromServer]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingComment(false));
  }

  React.useEffect(() => {
    setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => setCards(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setCards, setIsLoading]);

  return (
    <div className="page">
      <Header/>
      <main className="content">
        {main.isLoading ? <Preloader/> :
          <PhotoGrid
            cards={cards.cards}
            onImageClick={handleGetOriginalSizeImage}
          />
        }
      </main>
      <Footer/>
      <Popup
        isOpenPopup={main.isOpenPopup}
        onClose={closePopup}
        isLoadingComment={main.isLoadingComment}
        onSubmitComment={handleSubmitComment}
        comments={cards.comments}
        currentOriginSizeImage={cards.currentOriginSizeImage}
      />
    </div>
  );
}

const mapStateToProps = (store) => ({
  main: store.main,
  cards: store.cards,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpenPopup: (isOpenBool) => dispatch(setIsOpenPopup(isOpenBool)),
  setIsLoading: (isLoadingBool) => dispatch(setIsLoading(isLoadingBool)),
  setIsLoadingComment: (isLoadingBool) => dispatch(setIsLoadingComment(isLoadingBool)),
  setCards: (cardsArr) => dispatch(setCards(cardsArr)),
  setOriginSizeImage: (imgObj) => dispatch(setOriginSizeImage(imgObj)),
  setComments: (commentsArr) => dispatch(setComments(commentsArr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
