import React from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import PhotoGrid from '../PhotoGrid';
import Popup from "../Popup";
import app from '../../stores/appStore/app';

/**
 * App component.
 */
const App = () => {

  function handlePopupOpen(): void {
    app.setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = "hidden";
  }

  function closePopup(): void {
    app.setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
    document.body.style.overflow = "auto";
  }

  function handleEscClose(event: any): void {
    if (event.key === 'Escape') {
      closePopup();
    }
  }

  return (
    <div className="page">
      <Header/>
      <main className="content">
        <PhotoGrid onOpen={handlePopupOpen}/>
      </main>
      <Footer/>
      <Popup onClose={closePopup}/>
    </div>
  );
};

export default App;
