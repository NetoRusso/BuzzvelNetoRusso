import React from "react";
import Style from './footer.module.css';
import { useTranslation } from "react-i18next";

const Footer = () => { 
  const { t } = useTranslation();

  return (
    <footer className={Style.footer}>
      <p className={Style.footerText}>{t("Footer.text1")}<span>&copy; {new Date().getFullYear()}</span></p>
    </footer>
  )
};

export default Footer;
