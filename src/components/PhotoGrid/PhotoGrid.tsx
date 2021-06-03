import React from 'react';
import {observer} from "mobx-react-lite";
import './PhotoGrid.css';
import Image from '../../components/Image/Image';
import mainApi from "../../utils/mainApi";
import {dateParseFromTimestampToString} from "../../utils/helpers";
import Preloader from '../../components/Preloader/Preloader';
import photoGrid from '../../store/photoGrid';

interface IPhotoGridProps {
  onOpen: () => void;
}

const PhotoGrid: React.FC<IPhotoGridProps> = observer(({onOpen}) => {

  console.log('photogrid');// todo del

  function handleGetOriginalSizeImage(imageId: number) {
    if (imageId === photoGrid.originSizeImage.id) {
      onOpen();
    } else {
      photoGrid.setOriginSizeImage({});
      return mainApi.getOriginalSizeImage(imageId)
        .then((res) => {
          photoGrid.setOriginSizeImage({
            id: res.id,
            url: res.url
          });
          const newComments = res.comments.map((comment: { text: string, date: number, id: number }) => ({
            text: comment.text,
            date: dateParseFromTimestampToString(comment.date),
            id: comment.id
          }));
          photoGrid.setComments(newComments);
          onOpen();
        })
        .catch((err) => console.log(err));
    }
    return true;
  }

  React.useEffect(() => {
    console.log('запрос на сервер за карточками') // todo del
    photoGrid.setIsLoading(true);
    mainApi.getInitialImages()
      .then((data) => photoGrid.setCards(data))
      .catch((err) => console.log(err))
      .finally(() => photoGrid.setIsLoading(false));
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
});

export default React.memo(PhotoGrid);
