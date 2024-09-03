import React from "react";
import Style from './card.module.css';
import Ornament from "../Ornament";
import site from './assets/site.png';
import github from './assets/github.png';
import { useTranslation } from "react-i18next";

const Card = ( { logo, titulo, tecnologia_1, tecnologia_2, tecnologia_3, tecnologia_4, tecnologia_5, participacao, linkSite, card_link_site_title, linkGithub, card_link_github_title } ) => {
  const { t } = useTranslation();

  return (
    <div className={Style.componentCard}>
      <div className={Style.card} >
        <img className={Style.cardImage} src={logo} alt="Logo do projeto" />
        <div className={Style.cardDescription}>
          <h3 className={Style.cardTitle}>{titulo}</h3>
          <dl className={Style.cardTechnologies}>
            <dt className={Style.cardTechnologiesTitle}>{t("Card.technologies_title")}</dt>
            <dl className={Style.cardTechnologiesList}>
              <p className={Style.cardTechnologiesItem}>{tecnologia_1}</p>
              <p className={Style.cardTechnologiesItem}>{tecnologia_2}</p>
              <p className={Style.cardTechnologiesItem}>{tecnologia_3}</p>
              <p className={Style.cardTechnologiesItem}>{tecnologia_4}</p>
              <p className={Style.cardTechnologiesItem}>{tecnologia_5}</p>
            </dl>
          </dl>
          <h3 className={Style.cardParticipationTitle}>{t("Card.participation_title")}</h3>
          <p className={Style.cardParticipationText}>{participacao}</p>
          <div className={Style.cardLinkBox}>
            <a className={Style.cardLink} href={linkSite} target="_blank" rel="noreferrer" title={card_link_site_title}>
              <img src={site} className={Style.cardLinkImg} alt="Icone de site || website icon" />
            </a>
            <a className={Style.cardLink} href={linkGithub} target="_blank" rel="noreferrer" title={card_link_github_title}>
              <img src={github} className={Style.cardLinkImg} alt="Icone de site || website icon" />
            </a>
          </div>
        </div>
      </div>
      <Ornament />
    </div>
  )
};

export default Card;
