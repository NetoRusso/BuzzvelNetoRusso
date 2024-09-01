import React, { useState, useEffect, useRef } from 'react';
import Style from './Timeline.module.css';

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1988);
  const [markerPositions, setMarkerPositions] = useState([]);
  const [trackWidth, setTrackWidth] = useState(3);
  const timelineSliderRef = useRef(null);
  const titleTimelineRef = useRef(null);

  document.styleSheets[10].cssRules[3].style.width = `${trackWidth}%`;
  const trackWidthChange = (year) => {
    setTrackWidth((year - 1987) / (2025 - 1987) * 100);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const findPreviousOption = (currentYear) => {
    const tickMarks = document.getElementById('tickMarks').querySelectorAll('option');
    let previousYear = null;

    for (let i = 0; i < tickMarks.length; i++) {
      const year = parseInt(tickMarks[i].value);
      if (year < currentYear) {
        previousYear = year;
      } else {
        break;
      }
    }

    return previousYear;
  };

  const findNextOption = (currentYear) => {
    const tickMarks = document.getElementById('tickMarks').querySelectorAll('option');
    let nextYear = null;

    for (let i = 0; i < tickMarks.length; i++) {
      const year = parseInt(tickMarks[i].value);
      if (year > currentYear) {
        nextYear = year;
        break;
      }
    }
    return nextYear;
  };

  const handlePrevClick = () => {
    const previousYear = findPreviousOption(selectedYear);
    if (previousYear) {
      setSelectedYear(previousYear);
      trackWidthChange(previousYear);
    }
  };

  const handleNextClick = () => {
    const nextYear = findNextOption(selectedYear);
    if (nextYear) {
      setSelectedYear(nextYear);
      trackWidthChange(nextYear);
    }
  };

  useEffect(() => {
    const timelineSlider = timelineSliderRef.current;

    if (timelineSlider) {
      const updateMarkerPositions = () => {
        const tickMarks = document.getElementById('tickMarks').querySelectorAll('option');
        const positions = [];
        let i=0;
        tickMarks.forEach((option) => {
          i++;
          const year = option.value;
          const position = ((year - 1987) / (2025 - 1987)) * 100; // Calcula a posição com base no min
          positions.push(position * 0.9885 ); // Para telas 1920w o valor ideal é 0.99 mas para 360w é ??? 
          console.log(1 - (document.defaultView.innerWidth/1920)/(100 * i) );
        });

        setMarkerPositions(positions);
      };

      updateMarkerPositions();

      timelineSlider.addEventListener('input', updateMarkerPositions);

      return () => {
        timelineSlider.removeEventListener('input', updateMarkerPositions);
      };
    }
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.timelineHeader}>
        <div className={Style.btnPrev} onClick={handlePrevClick} />
        <h2 className={Style.titleTimeline} ref={titleTimelineRef}>
          {selectedYear}
        </h2>
        <div className={Style.btnNext} onClick={handleNextClick} />
      </div>
      <div className={Style.timelineBox}>

        <input
          type="range"
          id="timeline"
          min="1987"
          max="2025"
          defaultValue={1988}
          className={Style.timelineSlider}
          list="tickMarks"
          value={selectedYear}
          onChange={handleYearChange}
          ref={timelineSliderRef}
        />

        <datalist id="tickMarks">
          <option value="1988" />
          <option value="2002" />
          <option value="2006" />
          <option value="2008" />
          <option value="2009" />
          <option value="2012" />
          <option value="2013" />
          <option value="2014" />
          <option value="2015" />
          <option value="2018" />
          <option value="2019" />
          <option value="2020" />
          <option value="2021" />
          <option value="2022" />
          <option value="2023" />
          <option value="2024" />
        </datalist>
        <div className={Style.details}>
          {markerPositions.map((position, index) => (
            <div
              key={index}
              className={Style.marker}
              style={{ left: `${position}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
