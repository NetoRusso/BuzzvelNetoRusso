import React from "react";
import Style from './portifolioBuzvel.module.css';
import { useTranslation } from "react-i18next";
import CardBuzz from "../CardBuzz";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

import cursor from "./assets/arrow-slid-scroll.svg";


import img1 from './assets/comaouleve.png';
import img2 from './assets/viplant.png';
import img3 from './assets/tranquices.png';
import img4 from './assets/vigiasdaariba.png';

const PortifolioBuzzvel = () => {

  const { t } = useTranslation();

  return (
    <div className={Style.portifolioBuzzvelContainer}  >

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        pagination={true}
        navigation={true}
        draggable={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <CardBuzz
            img={img1}
            name="Coma ou Leve"
            text={t("CardBuzz.texto_1")}
            link="https://buzzvel.com/portfolio/coma-ou-leve"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBuzz
            img={img2}
            name="Viplant"
            text={t("CardBuzz.texto_2")}
            link="https://buzzvel.com/portfolio/viplant"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBuzz
            img={img3}
            name="Traquinices"
            text={t("CardBuzz.texto_3")}
            link="https://buzzvel.com/portfolio/traquinices"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBuzz
            img={img4}
            name="Vigias da Arriba"
            text={t("CardBuzz.texto_4")}
            link="https://buzzvel.com/portfolio/vigias-da-arriba"
          />
        </SwiperSlide>
      </Swiper>


      {/* <CardBuzz
          img={img2}
          name="Viplant"
          text={t("CardBuzz.texto_2")}
          link="https://buzzvel.com/portfolio/viplant"
        /> */}

      {/* <CardBuzz
          img={img3}
          name="Traquinices"
          text={t("CardBuzz.texto_3")}
          link="https://buzzvel.com/portfolio/traquinices"
        /> */}

      {/* <CardBuzz
          img={img4}
          name="Vigias da Arriba"
          text={t("CardBuzz.texto_4")}
          link="https://buzzvel.com/portfolio/vigias-da-arriba"
        /> */}




    </div>
  )
};

export default PortifolioBuzzvel;
