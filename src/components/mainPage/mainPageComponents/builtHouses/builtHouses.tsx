import styles from "./builtHouses.module.css";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";

export function BuiltHouses() {
  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <div className={styles.text}>Дома, которые мы построили для наших клиентов</div>
          <button className={styles.button}>Смотреть больше</button>
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
    </section>
  );
}
