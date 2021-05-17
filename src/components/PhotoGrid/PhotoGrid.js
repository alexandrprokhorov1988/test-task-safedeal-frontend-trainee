import React from 'react';
import './PhotoGrid.css';
import PropTypes from "prop-types";
import Image from '../../components/Image/Image';

function PhotoGrid({ cards, onImageClick }) {

  return (
    <section className="photo-grid">
      {cards.map((card) => (
        <Image
          key={card.id}
          id={card.id}
          url={card.url}
          onImageClick={onImageClick}
        />
      ))}
    </section>
  );
}

PhotoGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default PhotoGrid;
