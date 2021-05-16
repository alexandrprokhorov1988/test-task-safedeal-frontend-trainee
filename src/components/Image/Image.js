import React from 'react';
import './Image.css';

function Image({ id, url, onImageClick }) {

  function handleImageClick() {
    onImageClick(id);
  }

  return (
    <img
      key={id}
      src={url}
      alt="Картинка"
      className="photo-grid-img"
      onClick={handleImageClick}
    />
  );
}

export default Image;
