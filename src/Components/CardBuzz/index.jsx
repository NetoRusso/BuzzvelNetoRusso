import React from 'react';
import Style from './cardBuzz.module.css';
import { useTranslation } from 'react-i18next';
import buzzLogo from '../Buzzvel/assets/logo-light.svg';
import siteIcon from '../Card/assets/site.png';


const CardBuzz = ({ img, name, text, link }) => {

  const { t } = useTranslation();

  return (
    <div className={Style.card}>
      <div className={Style.cardInner}>
        <div className={Style.cardFront}>
          <img className={Style.cardImgFront} src={img} alt="imagem do card" />
          <div className={Style.cardFrontDetail} />
          <p className={Style.name}>{name}</p>
        </div>
        <div className={Style.cardBack}>
          <img className={Style.cardImgBack} src={img} alt="imagem do card" />
          <div className={Style.cardBackDetail} />
          <a className={Style.buzzLink} href='https://buzzvel.com/' target='_blank' rel='noreferrer' >
            <img src={buzzLogo} alt="logo" />
          </a>
          <p className={Style.text}>{text}</p>
          <div className={Style.linkBox}>
            <a className={Style.portLink} href={link} target="_blank" rel="noreferrer">
              <img src={siteIcon} alt="site" />
            </a>
            <p className={Style.linkText}>{t("CardBuzz.linkText")}</p>
          </div>
        </div>
      </div>
    </div >
  )
};

export default CardBuzz;
