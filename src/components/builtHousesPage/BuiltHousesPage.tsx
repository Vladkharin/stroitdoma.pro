import { Pagination, Autoplay, Parallax } from "swiper/modules";
import styles from "./BuiltHousesPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import { H1 } from "../titles/Titles";
import { MediumButton } from "../buttons/Buttons";
import { IconsFixed } from "../iconsFixed/IconsFixed";

export function BuiltHousesPage({ positionImg }: { positionImg: string }) {
  return (
    <section className={styles.information}>
      <div className={styles.information_wrapper}>
        <div className={styles.text_and_swiper_wrapper}>
          <div className={styles.information_text}>
            <H1 text={"Дома, в которых уже живут"} />
            <MediumButton text={"Выбрать дом"} link={"/catalog"} zoom={1} />
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
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/1_${positionImg}.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/2_${positionImg}.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/3_${positionImg}.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/4_${positionImg}.jpg`} alt="information" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.table}>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
          <div>
            <img className={styles.table_img} src="./img/1_gor.jpg" alt="" />
          </div>
        </div>
      </div>
      <IconsFixed path={"."} />
    </section>
  );
}
