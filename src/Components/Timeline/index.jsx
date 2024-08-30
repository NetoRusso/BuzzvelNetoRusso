import React from 'react';
import Style from './Timeline.module.css';

const Timeline = () => {
  return (
    <div className={Style.container}>
      <div className={Style.timelineLife}>
        {/* <h2 className={Style.title}>Vida e Acadêmico</h2> */}
        <div className={Style.timeline}>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
