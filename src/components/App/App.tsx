import React from 'react';
import './App.css';
// import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import {setIsOpenPopup} from "../../redux/actions/mainActions";
import PhotoGridContainer from '../../containers/PhotoGridContainer/PhotoGridContainer';
import PopupContainer from '../../containers/PopupContainer/PopupContainer';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const App = () => {

  const {setIsOpenPopup} = useAppDispatch();

  function handlePopupOpen() {
    setIsOpenPopup(true);
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
    document.body.style.overflow = "auto";
  }

  function handleEscClose(event:any):void {
      if (event.key === 'Escape') {
      closePopup();
    }
  }

  return (
    <div className="page">
      <Header/>
      <main className="content">
        <PhotoGridContainer
          onOpen={handlePopupOpen}
        />
      </main>
      <Footer/>
      <PopupContainer
        onClose={closePopup}
      />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   setIsOpenPopup: (isOpenBool) => dispatch(setIsOpenPopup(isOpenBool)),
// });
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(App);

export default App;
