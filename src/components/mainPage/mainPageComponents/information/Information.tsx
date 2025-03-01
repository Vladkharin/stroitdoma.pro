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

// const photos = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp"];

export function Information() {
  return (
    <section className={styles.information}>
      <div className={styles.information_wrapper}>
        <div className={styles.text_and_swiper_wrapper}>
          <div className={styles.information_text}>
            <div className={styles.text}>
              СТРОИТ - <br /> компания честно строит каркасные дома <br className={styles.br} /> в Москве <br className={styles.br} /> и
              Подмосковье
            </div>
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
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/1.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/2.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/3.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/4.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/5.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/6.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/7.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/8.webp"} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.information_mission}>
          <h2>Миссия</h2>
          <p>Наша компания СТРОИТ дома. Честно, надежно, как себе. Свой дом - это просто и доступно каждому.</p>
        </div>
      </div>
    </section>
  );
}
