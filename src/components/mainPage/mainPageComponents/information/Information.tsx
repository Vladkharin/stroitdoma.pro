// import React, { useState } from "react";
// import { FormModal } from "./formModal/FormModal";
// import React from "react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import styles from "./Information.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import { H1, H2, H3 } from "../../../titles/Titles";
import { useEffect, useState } from "react";

// const photos = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp"];

export function Information() {
  const [picturePosition, setPicturePosition] = useState("vert");

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 480 && width < 961) {
      setPicturePosition("gor");
    } else {
      setPicturePosition("vert");
    }
  }, []);

  return (
    <section className={styles.information}>
      <div className={styles.information_wrapper}>
        <div className={styles.text_and_swiper_wrapper}>
          <div className={styles.information_text}>
            <H1 text={"СТРОИТ - компания честно строит каркасные дома в Москве и Подмосковье"} />
            <button className={styles.button} onClick={() => console.log(1)}>
              Каталог
            </button>
          </div>
          <Swiper
            className={styles.swiper}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Pagination, Autoplay, Parallax]}
            pagination={{ clickable: true, type: "bullets" }}
            autoplay={{ delay: 5000 }}
            parallax={true}
            loop={true}
          >
            <SwiperSlide>
              <img
                className={styles.img}
                style={{ width: "100%", height: "100%" }}
                src={`./img/1_${picturePosition}.jpg`}
                alt="information"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                style={{ width: "100%", height: "100%" }}
                src={`./img/2_${picturePosition}.jpg`}
                alt="information"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                style={{ width: "100%", height: "100%" }}
                src={`./img/3_${picturePosition}.jpg`}
                alt="information"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                style={{ width: "100%", height: "100%" }}
                src={`./img/4_${picturePosition}.jpg`}
                alt="information"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.information_mission}>
          <H2 text={"Миссия"} size={"small"} />
          <H3 texts={["Наша компания СТРОИТ дома.", " Честно, надежно, как себе.", "Свой дом - это просто и доступно каждому."]} />
        </div>
      </div>
    </section>
  );
}
