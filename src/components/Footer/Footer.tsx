import React from 'react';
import style from './Footer.module.css';

/**
 * Footer component.
 */
const Footer: React.FC = () => {

  return (
    <footer className={style.footer}>
      <p className={style.text}>© 2018-2019-2021</p>
    </footer>
  );
};

export default Footer;
