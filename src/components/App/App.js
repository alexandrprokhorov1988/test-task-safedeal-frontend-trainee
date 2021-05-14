import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';

function App() {

  return (
    <div className="page">
      <Header/>
      <main className="content">
        <PhotoGrid/>
      </main>
      <Footer/>
      <Popup/>
    </div>
  );
}

export default App;
