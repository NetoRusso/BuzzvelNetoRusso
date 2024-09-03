import React from "react";
import Style from './projects.module.css';
import Card from "../Card";
import { useTranslation } from "react-i18next";
import donuts from './assets/Logo V.png';
import gvlar from './assets/GVlar_branco.png';
import bb8 from './assets/bb8_logo_branco.png';
import eduCode from './assets/EduCode_Logo_branco.png';

const Projects = () => {
  const { t } = useTranslation();


  return (
    <section className={Style.componentProject} id="projects" aria-label="Principais Projetos || Main projects">
      <div className={Style.projectsHeader}>
        <h2 className={Style.titleProjects}>{t("Projects.title")}</h2>
      </div>
      <div className={Style.projectsCards}>
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
        {/* <Card /> */}
      </div>
    </section>
  )
};

export default Projects;
