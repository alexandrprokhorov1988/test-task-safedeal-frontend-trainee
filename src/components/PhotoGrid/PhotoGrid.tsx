import React from 'react';
import './PhotoGrid.css';
import Image from '../../components/Image/Image';

interface IPhotoGridProps {
  cards: {
    id: number,
    url: string,
  }[],
  onImageClick: (id:number) => void,
}

const PhotoGrid: React.FC<IPhotoGridProps> = ({cards, onImageClick}) => {
console.log('photogrid')
  return (
    <section className="photo-grid">
      {cards && cards.map((card) => (
        <Image
          key={card.id}
          id={card.id}
          url={card.url}
          onImageClick={onImageClick}
        />
      ))}
    </section>
  );
};

export default React.memo(PhotoGrid);
