import React from 'react';
import './Preloader.css';

/**
 * Preloader component.
 */
const Preloader = () => {

  return (
    <div className="preloader">
      <div className="preloader__img"/>
      <p className="preloader__text">Идет поиск фотографий...</p>
    </div>
  );
};

export default Preloader;
