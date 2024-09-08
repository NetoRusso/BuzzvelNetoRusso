import React from "react";
import Style from './cardBuzz.module.css';
import { useTranslation } from "react-i18next";
import buzzvelLogo from '../Buzzvel/assets/logo-light.svg';

const Off = ({ link, image, nome, texto }) => {

  const { t } = useTranslation();

  return (
    <div
      className={`${Style.cardBuzzContainer} ${Style.noSelect}`}
      onClick={() => window.open(link, "_blank")}
    >
      <div className={Style.canvas} >
        <div className={`${Style.tracker} ${Style.tr1}`} />
        <div className={`${Style.tracker} ${Style.tr2}`} />
        <div className={`${Style.tracker} ${Style.tr3}`} />
        <div className={`${Style.tracker} ${Style.tr4}`} />
        <div className={`${Style.tracker} ${Style.tr5}`} />
        <div className={`${Style.tracker} ${Style.tr6}`} />
        <div className={`${Style.tracker} ${Style.tr7}`} />
        <div className={`${Style.tracker} ${Style.tr8}`} />
        <div className={`${Style.tracker} ${Style.tr9}`} />
        <div className={`${Style.tracker} ${Style.tr10}`} />
        <div className={`${Style.tracker} ${Style.tr11}`} />
        <div className={`${Style.tracker} ${Style.tr12}`} />
        <div className={`${Style.tracker} ${Style.tr13}`} />
        <div className={`${Style.tracker} ${Style.tr14}`} />
        <div className={`${Style.tracker} ${Style.tr15}`} />
        <div className={`${Style.tracker} ${Style.tr16}`} />
        <div className={`${Style.tracker} ${Style.tr17}`} />
        <div className={`${Style.tracker} ${Style.tr18}`} />
        <div className={`${Style.tracker} ${Style.tr19}`} />
        <div className={`${Style.tracker} ${Style.tr20}`} />
        <div className={`${Style.tracker} ${Style.tr21}`} />
        <div className={`${Style.tracker} ${Style.tr22}`} />
        <div className={`${Style.tracker} ${Style.tr23}`} />
        <div className={`${Style.tracker} ${Style.tr24}`} />
        <div className={`${Style.tracker} ${Style.tr25}`} />
        <div className={Style.cardBuzz} >
          <div className={Style.cardImage} style={{ backgroundImage: `url(${image})` }} />
          <p className={Style.nome}>{nome}</p>
          <div className={Style.cardInfo}>
            <p className={Style.cardInfoText} >{texto}</p>
            <a href="https://buzzvel.com/" target="_blank" rel="noreferrer" className={Style.buzzvelLogo}>
              <img src={buzzvelLogo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Off;