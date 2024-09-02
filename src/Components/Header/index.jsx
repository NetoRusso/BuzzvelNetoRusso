import React from "react";
import Style from './Header.module.css';

import Banner from "../Banner";


const Header = () => {
  return (
    <header className={Style.header}>
      <Banner /> 
    </header>
  );
};

export default Header;  
