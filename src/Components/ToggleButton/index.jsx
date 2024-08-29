import React, { useContext } from "react";
import Style from "./ToggleButton.module.css";
import ptIconOn from "./assets/lg_pt_on.png";
import ptIconOff from "./assets/lg_pt_off.png";
import enIconOn from "./assets/lg_en_on.png";
import enIconOff from "./assets/lg_en_off.png";
import AppContext from "../../Provider/AppContext";



const ToggleButton = () => {

  const { lang, changeLang } = useContext(AppContext);
  

  return (
    <div className={Style.content}>
      <div className={Style.pt} style={{backgroundImage:`url(${lang ? ptIconOff : ptIconOn})` }} />
      <div className={Style.toggleContainer}>
        <input className={Style.toggleInput} value={lang} type="checkbox" id="lang-button" onChange={
          (e) => {
            changeLang(e.target.checked);
          }
        } />

        <div className={Style.toggleHandleWrapper}>
          <div className={Style.toggleHandle}>
            <div onClick={
              () => {
                changeLang(!lang);
                // document.getElementById("lang-button").checked = !lang;
              
              }
            } className={Style.toggleHandleKnob} />
            <div className={Style.toggleHandleBarWrapper}>
              <div className={Style.toggleHandleBar} />
            </div>
          </div>
        </div>

        <div className={Style.toggleBase}>
          <div className={Style.togglebaseInside} />
        </div>
      </div>
      <div className={Style.en} style={{backgroundImage:`url(${lang ? enIconOn : enIconOff})` }}/>
    </div>
  )
}

export default ToggleButton;