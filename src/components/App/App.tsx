import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Popup from "../Popup/Popup";

const App = () => {

  const {setIsOpenPopup} = useAppDispatch();

  function handlePopupOpen(): void {
    setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = "hidden";
  }

  function closePopup(): void {
    setIsOpenPopup(false);
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
