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

const IMGS: string[] = [
  "built6.jpg",
  "built7.jpg",
  "built8.jpg",
  "built9.jpg",
  "built10.jpg",
  "built11.jpg",
  "built12.jpg",
  "built13.jpg",
  "built14.jpg",
  "built15.jpg",
  "built17.jpg",
  "built18.jpg",
  "built19.jpg",
  "built20.jpg",
  "built21.jpg",
  "built22.jpg",
  "built23.jpg",
  "built24.jpg",
];

export function BuiltHousesPage() {
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
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built1_new.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built2_new.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built3_new.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built4_new.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={"./img/built5.jpg"} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.table}>
          {IMGS.map((img) => {
            return (
              <div>
                <img className={styles.table_img} src={"./img/" + img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
      <IconsFixed path={"."} />
    </section>
  );
}
