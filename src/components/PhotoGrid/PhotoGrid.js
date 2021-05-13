import React from 'react';
import './PhotoGrid.css';
import img1 from '../../images/Rectangle1.png';
import img2 from '../../images/Rectangle2.png';
import img3 from '../../images/Rectangle3.png';
import img4 from '../../images/Rectangle4.png';
import img5 from '../../images/Rectangle5.png';
import img6 from '../../images/Rectangle6.png';

function PhotoGrid() {

  return (
    <section className="photo-grid">
        <img src={img1} alt="Картинка" className="photo-grid__img"/>
        <img src={img2} alt="Картинка" className="photo-grid__img"/>
        <img src={img3} alt="Картинка" className="photo-grid__img"/>
        <img src={img4} alt="Картинка" className="photo-grid__img"/>
        <img src={img5} alt="Картинка" className="photo-grid__img"/>
        <img src={img6} alt="Картинка" className="photo-grid__img"/>
    </section>
  );
}

export default PhotoGrid;
