import React from 'react';
import {observer} from "mobx-react-lite";
import './PhotoGrid.css';
import PhotoGridImage from './PhotoGridImage';
import Preloader from '../Preloader';
import photoGrid from '../../stores/photoGridStore/photoGrid';
import popup from '../../stores/popupStore/popup';

type PhotoGridProps = {
  /**
   * PhotoGrid handleOpen.
   */
  onOpen: () => void;
}

/**
 * PhotoGrid component.
 */
const PhotoGrid: React.FC<PhotoGridProps> = observer(({onOpen}) => {

  console.log('photogrid');// todo del

  function handleGetOriginalSizeImage(imageId: number) {
    if (imageId === popup.originSizeImage.id) {
      onOpen();
    } else {
     popup.getOriginSizeImage(imageId, onOpen);
    }
    return true;
  }

  React.useEffect(() => {
    console.log('запрос на сервер за карточками'); // todo del
    photoGrid.getInitialImages();
  }, []);

  return (
    <section className="photo-grid">
      {photoGrid.isLoading ? <Preloader/> :
        <>
          {photoGrid.cards && photoGrid.cards.map((card: any) => (
            <PhotoGridImage
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
