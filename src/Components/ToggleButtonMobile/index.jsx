import React, { useContext, useState } from 'react';
import Style from './ToggleButtonMobile.module.css';
import ptIconOn from './assets/lg_pt_on.png';
import ptIconOff from './assets/lg_pt_off.png';
import enIconOn from './assets/lg_en_on.png';
import enIconOff from './assets/lg_en_off.png';
import AppContext from '../../Provider/AppContext';


const ToggleButtonMobile = () => {

  const { lang, changeLang } = useContext(AppContext);

  return (
    <label className={Style.switch}>
      <input type="checkbox" className={Style.cb} id='toggleMobile' onChange={(e) => {
        changeLang(e.target.checked);
      }}/>
      <span className={Style.toggle}>
        <span className={Style.left}><img className={Style.lngIcon} src={lang ? ptIconOff : ptIconOn} alt="Portuguese" /></span>
        <span className={Style.right}><img className={Style.lngIcon} src={lang ? enIconOn : enIconOff} alt="English" /></span>
      </span>
    </label>

  )
}

export default ToggleButtonMobile;
