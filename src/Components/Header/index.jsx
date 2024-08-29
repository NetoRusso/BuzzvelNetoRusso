import React from "react";
import Style from './Header.module.css';

import Banner from "../Banner";


const Header = ({ text1, text2, text3 }) => {
  return (
    <header className={Style.header}>
      <Banner 
        text1={text1}
        text2={text2}
        text3={text3}
      />
    </header>
  );
};

export default Header;  
