import React from 'react';
import {connect} from 'react-redux'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import {setCards, setComments, setIsLoading, setOriginSizeImage} from "../../redux/actions/photoGridActions";
import Preloader from '../../components/Preloader/Preloader';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";

interface IPhotoGridContainer {
  onOpen: () => void,
}

const PhotoGridContainer: React.FC<IPhotoGridContainer> = ({onOpen}) => {

  const photoGrid = useAppSelector(state=> state.photoGrid);
  const {setIsLoading, setOriginSizeImage, setCards, setComments} = useAppDispatch();

  function handleGetOriginalSizeImage(imageId: number) {
    if (imageId === photoGrid.currentOriginSizeImage.id) {
      onOpen();
    } else {
      return mainApi.getOriginalSizeImage(imageId)
        .then((res) => {
          setOriginSizeImage({
            id: res.id,
            url: res.url
          });
          const newComments = res.comments.map((comment: { text: string, date: number, id: number }) => ({
            text: comment.text,
            date: dateParseFromTimestampToString(comment.date),
            id: comment.id
          }));
          setComments(newComments);
          onOpen();
        })
        .catch((err) => console.log(err));
    }
    return true;
  }

  React.useEffect(() => {
    setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => setCards(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {photoGrid.isLoading ? <Preloader/> :
        <PhotoGrid
          cards={photoGrid.cards}
          onImageClick={handleGetOriginalSizeImage}
        />
      }
      </>
  );
};

// const mapStateToProps = (store) => ({
//   photoGrid: store.photoGrid
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   setIsLoading: (isLoadingBool) => dispatch(setIsLoading(isLoadingBool)),
//   setCards: (cardsArr) => dispatch(setCards(cardsArr)),
//   setOriginSizeImage: (imgObj) => dispatch(setOriginSizeImage(imgObj)),
//   setComments: (commentsArr) => dispatch(setComments(commentsArr))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PhotoGridContainer);

export default PhotoGridContainer;
