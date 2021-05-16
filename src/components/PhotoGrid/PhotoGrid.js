import React from 'react';
import './PhotoGrid.css';
import Image from '../../components/Image/Image';

function PhotoGrid({ cards, onImageClick }) {

  return (
    <section className="photo-grid">
      {cards.map((card) => (
        <Image
          key={card.id}
          {...card}
          onImageClick={onImageClick}
        />
      ))}
    </section>
  );
}

export default PhotoGrid;
