import React from 'react';
import './PhotoGrid.css';
import Image from '../../components/Image/Image';
import {useAppSelector} from "../../hooks/useAppSelector";
import mainApi from "../../utils/mainApi";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import Preloader from '../../components/Preloader/Preloader';

interface IPhotoGridProps {
  onOpen: () => void;
}

const PhotoGrid: React.FC<IPhotoGridProps> = ({onOpen}) => {

  console.log('photogrid');//todo del

  const photoGrid = useAppSelector(state => state.photoGrid);
  const {setIsLoading, setOriginSizeImage, setCards, setComments} = useAppDispatch();

  function handleGetOriginalSizeImage(imageId: number) {
    if (imageId === photoGrid.currentOriginSizeImage.id) {
      onOpen();
    } else {
      setOriginSizeImage({});
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
    console.log('запрос на сервер за карточками') //todo del
    setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => setCards(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);


  return (
    <section className="photo-grid">
      {photoGrid.isLoading ? <Preloader/> :
        <>
          {photoGrid.cards && photoGrid.cards.map((card: any) => (
            <Image
              key={card.id}
              id={card.id}
              url={card.url}
              onImageClick={handleGetOriginalSizeImage}
            />
          ))}
        </>
      }
    </section>
  );
};

export default React.memo(PhotoGrid);
