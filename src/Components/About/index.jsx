import React from 'react';
import Style from './About.module.css';
import photo from './assets/FotoNeto01.png';
import Timeline from '../Timeline';
const About = ( { aboutText1, aboutText2, aboutText3 } ) => {
  return (
    <section className={Style.about} id='about' aria-label='Sobre mim || About me'>
      <div className={Style.aboutResume}>
        <img src={photo} alt="Foto de Neto Russo || Picure of Neto Russo" className={Style.photo} />
        <div className={Style.aboutTexts}>
          <p className={Style.aboutText}>{aboutText1}</p>
            <p className={Style.aboutText}>{aboutText2}</p>
            <p className={Style.aboutText}>{aboutText3}</p>
        </div>
      </div>
      <div className={Style.detail} />
      <Timeline />
      <div className={Style.detail2} />
    </section>
  )
}

export default About;
