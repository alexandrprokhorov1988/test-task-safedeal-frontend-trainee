import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
import Preloader from '../../components/Preloader/Preloader';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingComment, setIsLoadingComment] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [currentOriginSizeImage, setCurrentOriginSizeImage] = React.useState({});
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>
        setIsLoading(false)
      )
  }, []);

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
    if (imageId === currentOriginSizeImage.id) {
      handlePopupOpen();
    } else {
      setCurrentOriginSizeImage({});
      return mainApi.getOriginalSizeImage(imageId)
        .then((res) => {
          setCurrentOriginSizeImage({
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
        setComments([...comments, answerFromServer]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingComment(false));
  }

  return (
    <div className="page">
      <Header/>
      <main className="content">
        {isLoading ? <Preloader/> :
          <PhotoGrid
            cards={cards}
            isLoading={isLoading}
            onImageClick={handleGetOriginalSizeImage}
          />
        }
      </main>
      <Footer/>
      <Popup
        isOpenPopup={isOpenPopup}
        onClose={closePopup}
        isLoadingComment={isLoadingComment}
        onSubmitComment={handleSubmitComment}
        comments={comments}
        currentOriginSizeImage={currentOriginSizeImage}
      />
    </div>
  );
}

export default App;
