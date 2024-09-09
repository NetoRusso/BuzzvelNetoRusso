import React, { useRef } from "react";
import Style from './painelContatos.module.css';
import { useTranslation } from "react-i18next";

const PainelContatos = () => {
  const { t } = useTranslation();

  const emailRef = useRef();
  const wppRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const instagramRef = useRef();
  const downloadRef = useRef();


  const showText = (ref) => {
    ref.current.style.display = "block";
  };

  const hiddenText = (ref) => {
    ref.current.style.display = "none";
  };

  return (
    <div className={Style.painelContatosContainer}>
      <ul className={Style.painelContatosInform}>
        <dt className={Style.informTitle}>{t("PainelContatos.title")}</dt>
        <li className={Style.informItem}>{t("PainelContatos.info_1")}</li>
        <dt className={Style.informSubTitle}>{t("PainelContatos.subtitle")}</dt>
        <div className={Style.informContent}>
          <li className={Style.informItem}>{t("PainelContatos.info_2")}</li>
          <li className={Style.informItem}>{t("PainelContatos.info_3")}</li>
          <li className={Style.informItem}>{t("PainelContatos.info_4")}</li>
          <li className={Style.informItem}>{t("PainelContatos.info_5")}</li>
          <li className={Style.informItem}>{t("PainelContatos.info_6")}</li>
          <li className={Style.informItem}>{t("PainelContatos.info_7")}</li>
        </div>
      </ul>
      <div className={Style.PainelContatosRedes}>

        <a
          href="mailto:netoacrn1@gmail.com"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_email")}
          className={`${Style.emailLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(emailRef)}
          onMouseOut={() => hiddenText(emailRef)}
        />

        <a
          href="https://wa.me/+5534992138816"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_whatsapp")}
          className={`${Style.whatsappLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(wppRef)}
          onMouseOut={() => hiddenText(wppRef)}
        />

        <a
          href="https://www.linkedin.com/in/neto-russo/"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_linkedin")}
          className={`${Style.linkedinLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(linkedinRef)}
          onMouseOut={() => hiddenText(linkedinRef)}
        />

        <a
          href="https://github.com/NetoRusso"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_github")}
          className={`${Style.githubLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(githubRef)}
          onMouseOut={() => hiddenText(githubRef)}
        />

        <a
          href="https://www.instagram.com/neto.russo/"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_instagram")}
          className={`${Style.instagramLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(instagramRef)}
          onMouseOut={() => hiddenText(instagramRef)}
        />

        <a 
          href="https://drive.usercontent.google.com/uc?id=1e-UK6nvx_66OE6AeBhtxBP4LIceJj4Ic&export=download"
          target="_blank"
          rel="noreferrer"
          title={t("PainelContatos.rede_download")}
          className={`${Style.downloadLogo} ${Style.redeIcon}`}
          onMouseEnter={() => showText(downloadRef)}
          onMouseOut={() => hiddenText(downloadRef)}
        />
        <span className={`${Style.emailText} ${Style.redesText}`} ref={emailRef}>netoacrn1@gmail.com</span>
        <span className={`${Style.whatsappText} ${Style.redesText}`} ref={wppRef}>+55 (34) 9.99213-8816</span>
        <span className={`${Style.linkedinText} ${Style.redesText}`} ref={linkedinRef}>Argeu do Carmo Russo Neto</span>
        <span className={`${Style.githubText} ${Style.redesText}`} ref={githubRef}>NetoRusso</span>
        <span className={`${Style.instagramText} ${Style.redesText}`} ref={instagramRef}>@neto.russo</span>
        <span className={`${Style.downloadText} ${Style.redesText}`} ref={downloadRef} >{t("PainelContatos.rede_download")}</span>
      </div>
    </div>
  )
};

export default PainelContatos;
