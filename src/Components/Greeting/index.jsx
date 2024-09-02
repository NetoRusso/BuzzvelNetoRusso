import { useTranslation } from "react-i18next";
import React from "react";
import Style from './Greeting.module.css';

const Greeting = ({ glitch}) => {
  const { t } = useTranslation();
  return (
    <div className={Style.Greeting}>
      <div data-glitch={glitch} className={Style.glitch}>{t("Greeting.text1")}</div>
    </div>
  );
};

export default Greeting;
