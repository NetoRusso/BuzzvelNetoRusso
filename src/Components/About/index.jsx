import React from 'react';
import Style from './About.module.css';
import photo from './assets/FotoNeto01.png';
import Timeline from '../Timeline';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
const About = () => {
  const { t } = useTranslation();
  return (
    <section className={Style.about} id='about' aria-label='Sobre mim || About me'>
      <div className={Style.aboutResume}>
        <ScrollAnimation
          animateIn='fadeInLeft fadeIn'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={photo} alt="Foto de Neto Russo || Picure of Neto Russo" className={Style.photo} />
        </ScrollAnimation>

        <div className={Style.aboutTexts}>
          <ScrollAnimation
            animateIn='fadeInRight fadeIn'
          >
            <p className={Style.aboutText}>{t("About.aboutText1")}</p>
            <p className={Style.aboutText}>{t("About.aboutText2")}</p>
            <p className={Style.aboutText}>{t("About.aboutText3")}</p>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation
        animateIn='fadeInUp fadeIn'
        animateOnce={true}
        style={{
          width: "100%"
        }}
      >
        <div className={Style.detail} />
        <Timeline />
        <div className={Style.detail2} />
      </ScrollAnimation>
    </section>
  )
}

export default About;
