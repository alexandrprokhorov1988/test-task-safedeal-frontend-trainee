import React from 'react';
import {connect} from 'react-redux'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {
  setIsLoading,
  setOriginImage,
  setCards,
} from "../../redux/actions/photoGridActions";
import Preloader from '../../components/Preloader/Preloader';

function PhotoGridContainer(
  { photoGrid,
    setIsOpenPopup,
    setIsLoading,
    setCards,
    setOriginSizeImage,
    setComments,
    onOpen,
    onImageClick
  }) {

  // function handleGetOriginalImage(imageId) {
  //   if (imageId === photoGrid.currentOriginSizeImage.id) {
  //     onOpen();
  //   } else {
  //     return mainApi.getOriginalImage(imageId)
  //       .then((res) => {
  //         const newComments = res.comments.map((comment) => ({
  //           text: comment.text,
  //           date: dateParseFromTimestampToString(comment.date),
  //           id: comment.id
  //         }));
  //         setOriginImage({
  //           id: res.id,
  //           url: res.url,
  //           comments: newComments
  //         });
  //         onOpen();
  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   return true;
  // }

  React.useEffect(() => {
    setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => setCards(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setCards, setIsLoading]);

  return (
    <>
    { photoGrid.isLoading ? <Preloader/> :
      <PhotoGrid
        cards={photoGrid.cards}
        onImageClick={onImageClick}
      />
}      </>
  );
}

const mapStateToProps = (store) => ({
  photoGrid: store.photoGrid
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (isLoadingBool) => dispatch(setIsLoading(isLoadingBool)),
  setCards: (cardsArr) => dispatch(setCards(cardsArr)),
  // setOriginImage: (imgObj) => dispatch(setOriginImage(imgObj)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGridContainer);
