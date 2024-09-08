import React from "react";
import Card from "../Card";
import { useTranslation } from "react-i18next";

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import Style from './projects.module.css';
import './glider.css';

import donuts from './assets/Logo V.png';
import gvlar from './assets/GVlar_branco.png';
import bb8 from './assets/bb8_logo_branco.png';
import eduCode from './assets/EduCode_Logo_branco.png';
import javascript from './assets/javascriptFinal.png';
import fotografia from './assets/Fotografias.png';
import ScrollAnimation from "react-animate-on-scroll";



const Projects = () => {
  const { t } = useTranslation();



  return (
    <section className={Style.componentProject} id="projects" aria-label="Principais Projetos || Main projects">
      <ScrollAnimation
        animateIn='fadeIn'
      >
        <div className={Style.projectsHeader}>
          <div className={Style.terminal}>
            <div className={Style.terminalHeader}>
              <div className={Style.terminalCircle} />
              <p className={Style.terminalTitle}>Neto Russo Projects</p>
            </div>
            <div className={Style.terminalBody}>
              <p className={Style.terminalText}>.npm install Projects-Neto-Russo --Save<span>|</span></p>
            </div>
          </div>
          <h2 className={Style.titleProjects}>{t("Projects.title")}</h2>
        </div>
      </ScrollAnimation>

      <div className={Style.projectsCards}>
        <ScrollAnimation
          animateIn="fadeInRight fadeIn"
          style={{
            width: "100%",
          }}
          animateOnce={true}
        >
          <Glider
            slidesToShow={'auto'}
            slidesToScroll={1}
            itemWidth={256}
            exactWidth
            draggable
            dots={false}
            hasArrows={false}
            scrollLock={false}
            className={Style.glider}
          >
            <Card
              logo={donuts}
              titulo="Donuts Tech"
              tecnologia_1="React.js"
              tecnologia_2="Module CSS"
              tecnologia_3={t("Card.technologies_none")}
              tecnologia_4={t("Card.technologies_none")}
              tecnologia_5={t("Card.technologies_none")}
              participacao={t("Card.paticipation_donuts")}
              linkSite="https://www.donutstech.com.br/"
              card_link_site_title={t("Card.link_site_title_donuts")}
              linkGithub="https://github.com/NetoRusso/DonutsTech"
              card_link_github_title={t("Card.link_github_title_donuts")}
            />
            <Card
              logo={gvlar}
              titulo="GVLAR Imóveis"
              tecnologia_1="React.ts"
              tecnologia_2="SASS"
              tecnologia_3="Nest.js"
              tecnologia_4="MySQL"
              tecnologia_5="Docker"
              participacao={t("Card.paticipation_gvlar")}
              linkSite="https://gvlar.com.br/"
              card_link_site_title={t("Card.link_site_title_gvlar")}
              linkGithub="https://github.com/MilenaCLeme/website-gvlar"
              card_link_github_title={t("Card.link_github_title_gvlar")}
            />
            <Card
              logo={bb8}
              titulo="BB8 Geeks"
              tecnologia_1="HTML5"
              tecnologia_2="CSS3"
              tecnologia_3="JavaScript"
              tecnologia_4="Bootstrap"
              tecnologia_5={t("Card.technologies_none")}
              participacao={t("Card.paticipation_bb8")}
              linkSite="https://bb-8-geek.vercel.app/"
              card_link_site_title={t("Card.link_site_title_bb8")}
              linkGithub="https://github.com/NetoRusso/BB-8-Geek"
              card_link_github_title={t("Card.link_github_title_bb8")}
            />
            <Card
              logo={eduCode}
              titulo="EduCode"
              tecnologia_1="HTML5"
              tecnologia_2="CSS3"
              tecnologia_3="JavaScript"
              tecnologia_4={t('Card.technologies_none')}
              tecnologia_5={t('Card.technologies_none')}
              participacao={t('Card.paticipation_educode')}
              linkSite="https://educode-lac.vercel.app/"
              card_link_site_title={t("Card.link_site_title_educode")}
              linkGithub="https://github.com/NetoRusso/EduCode"
              card_link_github_title={t("Card.link_github_title_educode")}
            />
            <Card
              logo={javascript}
              titulo="Javascript"
              tecnologia_1="HTML5"
              tecnologia_2="CSS3"
              tecnologia_3="JavaScript"
              tecnologia_4={t("Card.technologies_none")}
              tecnologia_5={t("Card.technologies_none")}
              participacao={t("Card.paticipation_javascript")}
              linkSite="https://final-js-beryl.vercel.app/"
              card_link_site_title={t("Card.link_site_title_javascript")}
              linkGithub="https://github.com/NetoRusso/finalJs"
              card_link_github_title={t("Card.link_github_title_javascript")}
            />
            <Card
              logo={fotografia}
              titulo={t("Card.titulo_fotografias")}
              tecnologia_1="HTML5"
              tecnologia_2="CSS3"
              tecnologia_3="JavaScript"
              tecnologia_4={t("Card.technologies_none")}
              tecnologia_5={t("Card.technologies_none")}
              participacao={t("Card.paticipation_fotografias")}
              linkSite="https://fotografias-seven.vercel.app/"
              card_link_site_title={t("Card.link_site_title_fotografias")}
              linkGithub="https://github.com/NetoRusso/Fotografias"
              card_link_github_title={t("Card.link_github_title_fotografias")}
            />
          </Glider>
        </ScrollAnimation>
      </div>
    </section>
  )
};

export default Projects;
