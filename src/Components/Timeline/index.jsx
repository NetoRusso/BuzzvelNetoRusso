import React, { useState, useEffect, useRef } from 'react';
import Style from './Timeline.module.css';


const Timeline = () => {

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

  const position = (year) => {
    return `${((year - 1987) / (2025 - 1987)) * 100}%`
  };

  const prevClick = () => {
    const currentYearIndex = dataList.indexOf(year);
    if (currentYearIndex > 0) {
      setYear(dataList[currentYearIndex - 1]);
    }
  };

  const nextClick = () => {
    const currentYearIndex = dataList.indexOf(year);
    if (currentYearIndex < dataList.length - 1) {
      setYear(dataList[currentYearIndex + 1]);
    }
  };

  useEffect(() => {
    titleTimelineRef.current.textContent = year;
  },[year])


  return (
    <div className={Style.componentTimeline}>
      <div className={Style.timelinePainel} >
        <div className={Style.timelineBox}>
          <div className={Style.timelineLine} />
          <div className={Style.timelineLineAfter} style={{width: position(year)}} />
        </div>
        <div className={Style.timelineHeader}>
          <button className={Style.btnPrev} onClick={prevClick} />
          <h2 className={Style.titleTimeline} ref={titleTimelineRef}>{year}</h2>
          <button className={Style.btnNext} onClick={nextClick} />
        </div>
      </div>
    </div>
  )
};

export default Timeline;
