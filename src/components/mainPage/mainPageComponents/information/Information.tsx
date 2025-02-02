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
      <div className={"container"}>
        <div className={styles.information_wrapper}>
          <div className={styles.information_text}>
            <div className={styles.text}>
              СТРОИТ - <br /> компания честно строит каркасные дома в Москве и Подмосковье
            </div>
            <button className={styles.button}>Каталог</button>
          </div>
          <Swiper
            style={{ height: "500px", flexBasis: "40%" }}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Pagination, Autoplay, Parallax]}
            pagination={{ clickable: true, type: "bullets" }}
            autoplay={{ delay: 5000 }}
            parallax={true}
            loop={true}
          >
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/1.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/2.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/3.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/4.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/5.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/6.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/7.webp"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%", height: "100%" }} src={"./img/8.webp"} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
