import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
// import mainApi from '../../utils/MainApi';
import Preloader from '../../components/Preloader/Preloader';
import mainApi from "../../utils/mainApi";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingComment, setIsLoadingComment] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [currentOriginSizeImage, setCurrentOriginSizeImage] = React.useState({});
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setCards([
      {
        "id": 237,
        "url": "https://picsum.photos/id/237/300/200"
      },
      {
        "id": 238,
        "url": "https://picsum.photos/id/238/300/200"
      },
      {
        "id": 239,
        "url": "https://picsum.photos/id/239/300/200"
      },
      {
        "id": 240,
        "url": "https://picsum.photos/id/240/300/200"
      },
      {
        "id": 241,
        "url": "https://picsum.photos/id/241/300/200"
      },
      {
        "id": 242,
        "url": "https://picsum.photos/id/242/300/200"
      }
    ])
  }, []);
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   mainApi.getInitialImages()
  //     .then((data) => {
  //       // setCards(data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() =>
  //       setIsLoading(false)
  //     )
  // }, []);

  function handlePopupOpen() {
    setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function closePopup() {
    setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
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
          setComments(res.comments);
          handlePopupOpen();
        })
        .catch((err) => console.log(err));
    }
  }

  function handleSubmitComment(values, imageId) {
    const obj = {
      id: Math.random(),
      text: values.comment,
      date: new Date().getTime()
    };
    setIsLoadingComment(true);
    return mainApi.setNewComment(imageId, values.name, values.comment)
      .then(() => {
        setComments([...comments, obj]);
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
        isPopupOpen={isOpenPopup}
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
