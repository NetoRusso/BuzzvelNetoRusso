import React, { useEffect, useRef, useState } from 'react';
import Style from './timelineBuzz.module.css';
import { useTranslation } from 'react-i18next';

const TimelineBuzz = () => {
  const { t } = useTranslation();

  const dataList = [
    2024,
    2025,
    2026,
    2027,
    2028,
    2029
  ];

  const [year, setYear] = useState(2024);
  const titleTimelineBuzzRef = useRef(null);
  const [active, setActive] = useState(false);

  const position = (year) => {
    return `${((year - 2023) / (2030 - 2023)) * 100}%`
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
    titleTimelineBuzzRef.current.textContent = year;
  })

  return (
    <div className={Style.componentTimeline}>
      <div className={Style.timelinePainel} >
        <div className={Style.timelineBox}>
          <div className={Style.timelineLine} />
          <div className={Style.timelineLineAfter} style={{ width: position(year) }} />
        </div>
        <div className={Style.timelineHeader}>
          <button className={Style.btnPrev} onClick={prevClick} />
          <h2 className={Style.titleTimeline} ref={titleTimelineBuzzRef}>{year}</h2>
          <button className={Style.btnNext} onClick={nextClick} />
        </div>
      </div>
      <div className={Style.textContainer}>
        <h3 className={Style.textContainerTitle}>{year}</h3>
        <ul className={Style.textContainerList}>
          {year === 2024 ?
            <div className={Style.textContainerListText}>
              <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                <p className={Style.textContainerListItemText}>
                  {t("TimelineBuzz.2024_1")}
                </p>
              </li>
              <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                <p className={Style.textContainerListItemText}>
                  {t("TimelineBuzz.2024_2")}
                </p>
              </li>
            </div>
            : year === 2025 ?
              <div className={Style.textContainerListText}>
                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                  <p className={Style.textContainerListItemText}>
                    {t("TimelineBuzz.2025_1")}
                  </p>
                </li>
                <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                  <p className={Style.textContainerListItemText}>
                    {t("TimelineBuzz.2025_2")}
                  </p>
                </li>
                <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2025_2_1")}</p>
              </div>
              : year === 2026 ?
                <div className={Style.textContainerListText}>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("TimelineBuzz.2026_1")}
                    </p>
                  </li>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}>
                      {t("TimelineBuzz.2026_2")}
                    </p>
                  </li>
                  <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                    <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2026_3")}</p>
                  </li>
                </div>
                : year === 2027 ?
                  <div className={Style.textContainerListText}>
                    <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                      <p className={Style.textContainerListItemText}>
                        {t("TimelineBuzz.2027_1")}
                      </p>
                    </li>
                    <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                      <p className={Style.textContainerListItemText}>
                        {t("TimelineBuzz.2027_2")}
                      </p>
                    </li>
                    <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                      <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2027_3")}</p>
                    </li>
                    <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                      <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2027_4")}</p>
                    </li>
                  </div>
                  : year === 2028 ?
                    <div className={Style.textContainerListText}>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}>
                          {t("TimelineBuzz.2028_1")}
                        </p>
                      </li>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}>
                          {t("TimelineBuzz.2028_2")}
                        </p>
                      </li>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2028_3")}</p>
                      </li>
                      <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                        <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2028_4")}</p>
                      </li>
                    </div>
                    : year === 2029 ?
                      <div className={Style.textContainerListText}>
                        <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                          <p className={Style.textContainerListItemText}>
                            {t("TimelineBuzz.2029_1")}
                          </p>
                        </li>
                        <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                          <p className={Style.textContainerListItemText}>
                            {t("TimelineBuzz.2029_2")}
                          </p>
                        </li>
                        <li className={`${Style.textContainerListItem} ${active ? Style.slideIn : ""}`}>
                          <p className={Style.textContainerListItemText}> {t("TimelineBuzz.2029_3")}</p>
                        </li>
                      </div>
                      :
                      ""

          }
        </ul>
      </div>
    </div>
  )
}

export default TimelineBuzz;
