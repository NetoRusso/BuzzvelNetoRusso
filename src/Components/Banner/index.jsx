import React from 'react';
import Style from './Banner.module.css';
import Video from './assets/videoBanner3.mp4';
import myPhoto from './assets/myPhoto.png';
import Greeting from '../Greeting';


const Banner = ({ text1, text2, text3 }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.overlay} />
      <video autoPlay loop muted className={Style.video}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={Style.container}>
        <img src={myPhoto} alt="myPhoto" className={Style.photo} />
        <div className={Style.text}>
          <Greeting
            text1={text1}
          />
          <h2 className={Style.subTitle}>{text2}</h2>
          <h3 className={Style.position}>Dev. Front-end (React.js) || <br />
            Dev. Back-end (Java);
          </h3>
          <p className={Style.slogan}>{text3}</p>

        </div>
      </div>
    </div>
  )
};

export default Banner;
