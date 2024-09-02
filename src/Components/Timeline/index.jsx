import React, { useState, useEffect, useRef } from 'react';
import Style from './Timeline.module.css';
import { useTranslation } from 'react-i18next';
import site from "./assets/site.png";
import le20 from "./assets/le20Img.png";
import narrativa from "./assets/Narrativa.png";


const Timeline = () => {
  const { t } = useTranslation();
  const dataList = [
    1988,
    2002,
    2006,
    2008,
    2009,
    2012,
    2013,
    2014,
    2015,
    2018,
    2019,
    2021,
    2022,
    2023,
    2024
  ];

  const [year, setYear] = useState(1988);
  const titleTimelineRef = useRef(null);
  const [active, setActive] = useState(false);

  const position = (year) => {
    return `${((year - 1987) / (2025 - 1987)) * 100}%`
  };

  const prevClick = () => {
    const currentYearIndex = dataList.indexOf(year);
    if (currentYearIndex > 0) {
      setYear(dataList[currentYearIndex - 1]);
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  };

  const nextClick = () => {
    const currentYearIndex = dataList.indexOf(year);
    if (currentYearIndex < dataList.length - 1) {
      setYear(dataList[currentYearIndex + 1]);
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  };

  useEffect(() => {
    titleTimelineRef.current.textContent = year;
  }, [year])


  return (
    <div className={Style.componentTimeline}>
      <div className={Style.timelinePainel} >
        <div className={Style.timelineBox}>
          <div className={Style.timelineLine} />
          <div className={Style.timelineLineAfter} style={{ width: position(year) }} />
        </div>
        <div className={Style.timelineHeader}>
          <button className={Style.btnPrev} onClick={prevClick} />
          <h2 className={Style.titleTimeline} ref={titleTimelineRef}>{year}</h2>
          <button className={Style.btnNext} onClick={nextClick} />
        </div>
      </div>

      <div className={Style.textContainer}>
        <h3 className={Style.textContainerTitle}>{year}</h3>
        <ul className={Style.textContainerList}>
          {year === 1988 ?
            <div className={Style.textContainerListText}>
              <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                <p className={Style.textContainerListItemText}>
                  {t("Timeline.1988_1")}
                </p>
              </li>
            </div>
            : year === 2002 ?
              <div className={Style.textContainerListText}>
                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                  <p className={Style.textContainerListItemText}>
                    {t("Timeline.2002_1")}
                  </p>
                </li>
                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                  <p className={Style.textContainerListItemText}>
                    CID 10: M21.0, M21.7, M24.6, M41.5 e M86.5 .
                  </p>
                </li>
              </div>
              : year === 2006 ?
                <div className={Style.textContainerListText}>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("Timeline.2006_1")}
                    </p>
                    <span className={Style.description}>
                      {t("Timeline.2006_1_1")}
                    </span>
                  </li>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("Timeline.2006_2")}
                    </p>
                    <span className={Style.description}>
                      {t("Timeline.2006_1_1")}
                    </span>
                  </li>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("Timeline.2006_3")}
                    </p>
                    <span className={Style.description}>
                      {t("Timeline.2006_1_1")}
                    </span>
                  </li>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("Timeline.2006_4")}
                    </p>
                    <span className={Style.description}>
                      {t("Timeline.2006_1_1")}
                    </span>
                  </li>
                </div>
                : year === 2008 ?
                  <div className={Style.textContainerListText}>
                    <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                      <p className={Style.textContainerListItemText}>
                        {t("Timeline.2008_1")}
                      </p>
                    </li>
                  </div>
                  : year === 2009 ?
                    <div className={Style.textContainerListText}>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}>
                          {t("Timeline.2009_1")}
                        </p>
                      </li>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}>
                          {t("Timeline.2009_2")}
                        </p>
                      </li>
                    </div>
                    : year === 2012 ?
                      <div className={Style.textContainerListText}>
                        <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                          <p className={Style.textContainerListItemText}>
                            {t("Timeline.2012_1")}
                          </p>
                          <span className={Style.description}>
                            {t("Timeline.2012_1_1")}
                          </span>
                        </li>
                      </div>
                      : year === 2013 ?
                        <div className={Style.textContainerListText}>
                          <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                            <p className={Style.textContainerListItemText}>
                              {t("Timeline.2013_1")}
                            </p>
                          </li>
                        </div>
                        : year === 2014 ?
                          <div className={Style.textContainerListText}>
                            <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                              <p className={Style.textContainerListItemText}>
                                {t("Timeline.2014_1")}
                              </p>
                            </li>
                          </div>
                          : year === 2015 ?
                            <div className={Style.textContainerListDisplay}>
                              <div className={Style.textContainerListText}>
                                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                                  <p className={Style.textContainerListItemText}>
                                    {t("Timeline.2015_1")}
                                  </p>
                                  <p className={Style.textContainerListItemText}>
                                    {t("Timeline.2015_2")}
                                  </p>
                                  <p className={Style.textContainerListItemText}>
                                    {t("Timeline.2015_3")}
                                  </p>
                                </li>
                                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                                  <p className={Style.textContainerListItemText}><a className={Style.textContainerListLink} href='https://le20rep.com' target='_blank' rel="noreferrer" title={t("Timeline.2015_link_title")}>  <img src={site} className={Style.websiteIcon} alt="Icone de site || website icon" /> {t("Timeline.2015_link")}</a></p>
                                </li>
                              </div>
                              <img className={Style.textContainerListDisplayImg} src={le20} alt="Logo da Le20 Representações || Le20 Representações logo" />
                            </div>
                            : year === 2018 ?
                            <div className={Style.textContainerListDisplay}>
                            <div className={Style.textContainerListText}>
                              <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                                <p className={Style.textContainerListItemText}>
                                  {t("Timeline.2018_1")}
                                </p>
                                <p className={Style.textContainerListItemText}>
                                  {t("Timeline.2018_2")}
                                </p>
                                <p className={Style.textContainerListItemText}>
                                  {t("Timeline.2018_3")}
                                </p>
                              </li>
                              <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                                <p className={Style.textContainerListItemText}><a className={Style.textContainerListLink} href='https://narrativadaimaginacao.org/' target='_blank' rel='noreferrer' title={t("Timeline.2018_link_title")}> <img src={site} className={Style.websiteIcon} alt="Icone de site || website icon" /> {t("Timeline.2018_link")}</a></p>
                              </li>
                            </div>
                            <img className={Style.textContainerListDisplayImg} src={narrativa} alt="Fotos de eventos da Narrativa da imaginação || Photos of Narrative of Imagination events" />
                          </div>
                              :
                              ""
          }
        </ul>
      </div>
    </div>
  )
};

export default Timeline;
