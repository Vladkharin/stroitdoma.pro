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
  "built25.jpg",
  "built26.jpg",
  "built27.jpg",
  "built28.jpg",
  "built29.jpg",
  "built30.jpg",
  "built31.jpg",
  "built32.jpg",
  "built33.jpg",
  "built34.jpg",
  "built35.jpg",
  "built36.jpg",
  "built37.jpg",
  "built38.jpg",
  "built39.jpg",
  "built40.jpg",
  "built41.jpg",
  "built42.jpg",
  "built43.jpg",
  "built44.jpg",
  "built45.jpg",
  "built46.jpg",
  "built47.jpg",
  "built48.jpg",
  "built49.jpg",
  "built50.jpg",
  "built51.jpg",
  "built52.jpg",
  "built53.jpg",
  "built54.jpg",
  "built55.jpg",
  "built56.jpg",
  "built57.jpg",
  "built58.jpg",
  "built59.jpg",
  "built60.jpg",
  "built61.jpg",
  "built62.jpg",
  "built63.jpg",
  "built64.jpg",
  "built65.jpg",
  "built66.jpg",
  "built67.jpg",
  "built68.jpg",
  "built69.jpg",
  "built70.jpg",
  "built71.jpg",
  "built72.jpg",
  "built73.jpg",
  "built74.jpg",
  "built75.jpg",
];

export function BuiltHousesPage() {
  return (
    <section className={styles.information}>
      <div className={styles.information_wrapper}>
        <div className={styles.text_and_swiper_wrapper}>
          <div className={styles.information_text}>
            <H1 texts={["Дома, которые мы построили для наших клиентов"]} />
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
