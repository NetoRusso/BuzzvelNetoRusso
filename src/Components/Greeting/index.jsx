import React from "react";
import Style from './Greeting.module.css';

const Greeting = ({ text1 }) => {
  return (
    <div className={Style.Greeting}>
      <div data-glitch={text1} className={Style.glitch}>{text1}</div>
    </div>
  );
};

export default Greeting;
