import React from 'react';
import { observer } from 'mobx-react-lite';

import style from './PhotoGrid.module.scss';
import PhotoGridImage from './PhotoGridImage';
import Preloader from '../Preloader';
import photoGrid from '../../stores/photoGridStore';

type PhotoGridProps = {
  /**
   * App onOpen.
   */
  onOpen: () => void;
};

/**
 * PhotoGrid component.
 */
const PhotoGrid: React.FC<PhotoGridProps> = observer(({ onOpen }) => {
  console.log('photogrid');// todo del

  React.useEffect(() => {
    console.log('запрос на сервер за карточками'); // todo del
    photoGrid.getInitialImages();
  }, []);

  return (
    <section className={style.photoGrid}>
      {photoGrid.isLoading ? <Preloader />
        : (
          <>
            {photoGrid.cards && photoGrid.cards.map((card: any) => (
              <PhotoGridImage
                key={card.id}
                id={card.id}
                url={card.url}
                onOpen={onOpen}
              />
            ))}
          </>
        )}
    </section>
  );
});

export default React.memo(PhotoGrid);
