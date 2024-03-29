import React from 'react';
import comfortZone from '../../../../goit-react-hw-08-phonebook/src/images/zone.png'
import css from './Home.module.css'



const HomePage = () => (
  <div className={css.HomeContainer}>
    <div className={css.HomeImgBox}>
      <img src={comfortZone} alt='' className={css.HomeImg}/>
    </div>

    <div className={css.HomeTextBox}>
      <h1 className={css.HomeText}>
        Welcome to the Phonebook app! We will do our best to make it more convenient for you to use this application.
      </h1>
    </div>
  </div>

);

export default HomePage;
