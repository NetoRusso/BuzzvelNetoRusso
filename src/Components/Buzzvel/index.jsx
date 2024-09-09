import React, { useEffect, useState } from "react";
import Style from "./buzzvel.module.css";
import buzzvelLogo from './assets/logo-light.svg';
import { useTranslation } from "react-i18next";
import WhyBuzzvel from "../WhyBuzzvel";
import PortifolioBuzzvel from "../PortifolioBuzzvel";

import pause from './assets/pause.png';
import play from './assets/play.png';
import ScrollAnimation from "react-animate-on-scroll";
import TimelineBuzz from "../TimelineBuzz";

const Buzzvel = () => {

  const { t } = useTranslation();

  const [botao, setBotao] = useState(false);


  const [count, setCount] = useState(1);

  useEffect(() => {

    let time;

    if (!botao) {      
      time = setTimeout(() => {
        if (count === 1 && !botao) {
          setCount(2);
        } else if (count === 2 && !botao) {
          setCount(3);
        } else if (count === 3 && !botao) {
          setCount(4);
        } else if (count === 4 && !botao) {
          setCount(5);
        } else if (count === 5 && !botao) {
          setCount(1);
        }
      }, 10000);
    }
    
    return () => {
      clearTimeout(time);
    }

  }, [count, botao])

  return (
    <section className={Style.buzzvel} aria-label="Seção sobre a Buzzvel || Section about Buzzvel" id="buzzvel">
      <ScrollAnimation
        animateIn="fadeInUp fadeIn"
        animateOnce={true}
      >
      <div className={Style.buzzvelDetail} />
      <div className={Style.buzzvelContainer}>
        <div className={Style.buzzvelHeader} >
          <a href="https://buzzvel.com/" target="_blank" rel="noreferrer">
            <img src={buzzvelLogo} alt="logo" className={Style.buzzvelLogo} />
          </a>

        </div>
        <div className={Style.whyBuzzvel}>
          <div className={Style.whyBuzzvelHeader} >
            <h2 className={`${Style.whyBuzzvelTitle} ${Style.buzzvelTitle}`}>{t("Buzzvel.whyBuzzvel")}</h2>
            <img src={botao ? play : pause} alt="player" className={Style.player} onClick={() => setBotao(!botao)} />
          </div>
          <WhyBuzzvel
            count={count}
          />
        </div>
        <div className={Style.buzzvelPortifolio}>
          <h2 className={`${Style.buzzvelPortifolioTitle} ${Style.buzzvelTitle}`}>{t("Buzzvel.portfolio")}</h2>
          <PortifolioBuzzvel />
        </div>
        <div className={Style.timelineBuzzvel}>
          <h2 className={`${Style.timelineBuzzvelTitle} ${Style.buzzvelTitle}`}>{t("Buzzvel.timeline")}</h2>
          <TimelineBuzz />
        </div>
      </div>
      <div className={Style.buzzvelDetail2} />
      </ScrollAnimation>
    </section>
  )
};

export default Buzzvel;
