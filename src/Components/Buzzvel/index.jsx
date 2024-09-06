import React from "react";
import Style from "./buzzvel.module.css";
import buzzvelLogo from './assets/logo-light.svg';
import { useTranslation } from "react-i18next";
import WhyBuzzvel from "../WhyBuzzvel";

const Buzzvel = () => {

  const { t } = useTranslation();

  return (
    <section className={Style.buzzvel} aria-label="Seção sobre a Buzzvel || Section about Buzzvel" id="buzzvel">
      <div className={Style.buzzvelDetail} />
      <div className={Style.buzzvelContainer}>
        <div className={Style.buzzvelHeader} >
          <a href="https://buzzvel.com/" target="_blank" rel="noreferrer">
            <img src={buzzvelLogo} alt="logo" className={Style.buzzvelLogo} />
          </a>
        </div>
        <div className={Style.whyBuzzvel}> 
          <h2 className={Style.whyBuzzvelTitle}>{t("Buzzvel.whyBuzzvel")}</h2>
          <WhyBuzzvel />
        </div>
      </div>
      <div className={Style.buzzvelDetail2} />
    </section>
  )
};

export default Buzzvel;
