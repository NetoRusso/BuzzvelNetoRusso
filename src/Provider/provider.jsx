import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../i18n";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const changeLang = (e) => {
    setLang(e);
    changeLanguage(e ? 'en' : 'pt');
    document.getElementById("lang-button").checked = !lang;
    document.getElementById("toggleMobile").checked = !lang; 
  };

  return (
    <AppContext.Provider value={{ lang, changeLang }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
