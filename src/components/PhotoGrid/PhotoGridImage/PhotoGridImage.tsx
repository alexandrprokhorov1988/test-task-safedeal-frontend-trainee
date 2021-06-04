import React from 'react';
import './PhotoGridImage.css';

type PhotoGridImageProps = {
  /**
   * Image id.
   */
  id: number;
  /**
   * Image url.
   */
  url: string;
  /**
   * Image handleClick.
   */
  onImageClick: (id: number) => void;
}

/**
 * Image component.
 */
const PhotoGridImage: React.FC<PhotoGridImageProps> = ({id, url, onImageClick}) => {

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
      className="photo-grid-image"
      onClick={handleImageClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="presentation"
    />
  );
};

export default React.memo(PhotoGridImage);
