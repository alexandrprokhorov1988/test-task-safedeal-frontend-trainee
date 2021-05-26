import React from 'react';
import './Preloader.css';

const Preloader = () => {

  return (
    <div className="preloader">
      <div className="preloader__img"/>
      <p className="preloader__text">Идет поиск фотографий...</p>
    </div>
  );
};

export default Preloader;
