import React from "react";
import Style from './whyBuzzvel.module.css';
import { useTranslation } from "react-i18next";
import img1 from './assets/portugal.png';


const WhyBuzzvel = ({ count}) => {

  const { t } = useTranslation();

  return (
    <div className={Style.whyBuzzvelContainer}>
      {
        count === 1 && (
          <div className={Style.whyBuzzvelDisplay}>
            <div className={`${Style.whyBuzzvelImage} ${Style.img1}`} />
            <div className={Style.whyBuzzvelTextBox}>
              <h3 className={Style.whyBuzzvelTitle} >{t("WhyBuzzvel.title_1")}</h3>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_1_1")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_1_2")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_1_3")}</p>
            </div>
          </div>
        )
      }
      {
        count === 2 && (
          <div className={Style.whyBuzzvelDisplay}>
            <div className={`${Style.whyBuzzvelImage} ${Style.img2}`} />
            <div className={Style.whyBuzzvelTextBox}>
              <h3 className={Style.whyBuzzvelTitle} >{t("WhyBuzzvel.title_2")}</h3>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_2_1")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_2_2")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_2_3")}</p>
            </div>
          </div>
        )
      }
      {
        count === 3 && (
          <div className={Style.whyBuzzvelDisplay}>
            <div className={`${Style.whyBuzzvelImage} ${Style.img3}`} />
            <div className={Style.whyBuzzvelTextBox}>
              <h3 className={Style.whyBuzzvelTitle} >{t("WhyBuzzvel.title_3")}</h3>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_3_1")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_3_2")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_3_3")}</p>
            </div>
          </div>
        )
      }
      {
        count === 4 && (
          <div className={Style.whyBuzzvelDisplay}>
            <div className={`${Style.whyBuzzvelImage} ${Style.img4}`} />
            <div className={Style.whyBuzzvelTextBox}>
              <h3 className={Style.whyBuzzvelTitle} >{t("WhyBuzzvel.title_4")}</h3>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_4_1")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_4_2")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_4_3")}</p>
            </div>
          </div>
        )
      }
      {
        count === 5 && (
          <div className={Style.whyBuzzvelDisplay}>
            <div className={`${Style.whyBuzzvelImage} ${Style.img5}`} />
            <div className={Style.whyBuzzvelTextBox}>
              <h3 className={Style.whyBuzzvelTitle} >{t("WhyBuzzvel.title_5")}</h3>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_5_1")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_5_2")}</p>
              <p className={Style.whyBuzzvelText} >{t("WhyBuzzvel.text_5_3")}</p>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default WhyBuzzvel;
