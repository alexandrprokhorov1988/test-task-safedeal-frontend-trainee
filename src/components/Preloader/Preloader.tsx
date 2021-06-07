import React from 'react';

import style from './Preloader.module.scss';

/**
 * Preloader component.
 */
const Preloader = () => (
  <div className={style.preloader}>
    <div className={style.img} />
    <p className={style.text}>Идет поиск фотографий...</p>
  </div>
);

export default Preloader;
