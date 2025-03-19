import styles from "./builtHouses.module.css";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import { H1 } from "../../../titles/Titles";
import { MediumButton } from "../../../buttons/Buttons";

export function BuiltHouses() {
  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 text={"Дома, которые мы построили для наших клиентов"} />
          <MediumButton text={"Смотреть больше"} link={"/built_houses"} zoom={1} />
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
            <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built1.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built5.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
