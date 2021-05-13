import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer';

function App() {

  return (
    <div className="page">
      <Header/>
      <main className="content">
        <PhotoGrid/>
      </main>
      <Footer/>
      {/* <div className="popup"> */}

      {/* </div> */}
    </div>
  );
}

export default App;
