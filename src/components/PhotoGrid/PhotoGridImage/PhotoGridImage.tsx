import React from 'react';
import style from './PhotoGridImage.module.scss';
import popup from "../../../stores/popupStore";

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
  onOpen: () => void;
}

/**
 * Image component.
 */
const PhotoGridImage: React.FC<PhotoGridImageProps> = ({id, url, onOpen}) => {

  function handleGetOriginalSizeImage(imageId: number) {
    if (imageId === popup.originSizeImage.id) {
      onOpen();
    } else {
      popup.getOriginSizeImage(imageId, onOpen);
    }
    return true;
  }

  function handleImageClick(): void {
    handleGetOriginalSizeImage(id);
  }

  function handleKeyDown(e: React.KeyboardEvent): void | boolean {
    if (e.key === 'Enter') {
      handleGetOriginalSizeImage(id);
    }
    return false;
  }

  return (
    <img
      key={id}
      src={url}
      alt="Картинка"
      className={style.photoGridImage}
      onClick={handleImageClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="presentation"
    />
  );
};

export default React.memo(PhotoGridImage);
