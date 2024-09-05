import React from "react";
import Style from "./contact.module.css";
import { useTranslation } from "react-i18next";
import contact from './assets/contact.png';
import Forms from "../Forms";
import PainelContatos from "../PainelContatos";


const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={Style.contact} id="contact" aria-label="Contato || Contact">
      <div className={Style.contactHeader}>
        <h2 className={Style.contactTitle}>{t("Contact.title")}</h2>
        <img src={contact} alt="contact" className={Style.contactImage} />
      </div>
      <div className={Style.contactContainer}>
        <Forms />
        <PainelContatos />
      </div>
    </section>
  )
};

export default Contact;
