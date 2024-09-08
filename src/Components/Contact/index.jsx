import React from "react";
import Style from "./contact.module.css";
import { useTranslation } from "react-i18next";
import contact from './assets/contact.png';
import Forms from "../Forms";
import PainelContatos from "../PainelContatos";
import ScrollAnimation from "react-animate-on-scroll";


const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={Style.contact} id="contact" aria-label="Contato || Contact">
      <ScrollAnimation
        animateIn='fadeIn'
      >
      <div className={Style.contactHeader}>
        <h2 className={Style.contactTitle}>{t("Contact.title")}</h2>
        <img src={contact} alt="contact" className={Style.contactImage} />
      </div>
      </ScrollAnimation>
      <div className={Style.contactContainer}>
        <ScrollAnimation 
          animateIn="fadeInRight fadeIn"
        >
        <Forms />
        </ScrollAnimation>
        <ScrollAnimation 
          animateIn="fadeInLeft fadeIn"
        >
        <PainelContatos />
        </ScrollAnimation>
      </div>
    </section>
  )
};

export default Contact;
