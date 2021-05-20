import React from 'react';
import './Image.css';
import PropTypes from "prop-types";

const Image = React.memo(({ id, url, onImageClick }) => {

  function handleImageClick() {
    onImageClick(id);
  }

  function handleKeyDown(e) {
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
});

Image.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired
};

Image.defaultProps = {
  onClick: () => {
  },
  onKeyDown: () => {
  },
  id: "",
  url: ""
};

export default Image;
