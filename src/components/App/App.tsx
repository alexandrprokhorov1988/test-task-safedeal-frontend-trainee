import React from 'react';

import style from './App.module.css';
import Header from '../Header';
import Footer from '../Footer';
import PhotoGrid from '../PhotoGrid';
import Popup from '../Popup';
import app from '../../stores/appStore';

/**
 * App component.
 */
const App = () => {
  function handleOpenPopup(): void {
    app.setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = 'hidden';
  }

  function handleClosePopup(): void {
    app.setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
    document.body.style.overflow = 'auto';
  }

  function handleEscClose(event: any): void {
    if (event.key === 'Escape') {
      handleClosePopup();
    }
  }

  return (
    <div className={style.page}>
      <Header />
      <main className="content">
        <PhotoGrid onOpen={handleOpenPopup} />
      </main>
      <Footer />
      <Popup onClose={handleClosePopup} />
    </div>
  );
};

export default App;
