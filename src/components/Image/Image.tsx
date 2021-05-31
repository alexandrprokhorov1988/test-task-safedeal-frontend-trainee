import React from 'react';
import './Image.css';

interface IImage {
  id: number;
  url: string;
  onImageClick: (id: number) => void;
}

const Image: React.FC<IImage> = ({id, url, onImageClick}) => {

  function handleImageClick(): void {
    onImageClick(id);
  }

  function handleKeyDown(e: React.KeyboardEvent): void | boolean {
    if (e.key === 'Enter') {
      onImageClick(id);
    }
    return false;
  }

  return (
    <img
      key={id}
      src={url}
      alt="Картинка"
      className="photo-grid-img"
      onClick={handleImageClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="presentation"
    />
  );
};

export default React.memo(Image);
