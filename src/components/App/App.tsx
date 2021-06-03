import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Popup from "../Popup/Popup";
import app from '../../store/app';
import {dateParseFromTimestampToString} from "../../utils/helpers";

const App = () => {
console.log(dateParseFromTimestampToString(1621278139402));
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
