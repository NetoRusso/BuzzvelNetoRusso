import React from 'react';
import Style from './Banner.module.css';
import Video from './assets/videoBanner3.mp4';
import myPhoto from './assets/myPhoto.png';
import Greeting from '../Greeting';
import { useTranslation } from 'react-i18next';


const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={Style.banner}>
      <div className={Style.overlay} />
      <video autoPlay loop muted className={Style.video}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={Style.container}>
        <img src={myPhoto} alt="myPhoto" className={Style.photo} />
        <div className={Style.text}>
          <Greeting 
          glitch={t("Greeting.text1")}
          />
          <h2 className={Style.subTitle}>{t("Banner.text2")}</h2>
          <h3 className={Style.position}>Dev. Front-end (React.js) || <br />
            Dev. Back-end (Java);
          </h3>
          <p className={Style.slogan}>{t("Banner.text3")}</p>

        </div>
      </div>
    </div>
  )
};

export default Banner;
