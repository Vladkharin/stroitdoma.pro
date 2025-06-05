import { Pagination, Autoplay, Parallax } from "swiper/modules";
import styles from "./Information.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import { H1WithBr, H2, H3 } from "../../../titles/Titles";
import { MediumButton } from "../../../buttons/Buttons";

export function Information() {
  return (
    <section className={styles.information}>
      <div className={styles.information_wrapper}>
        <div className={styles.text_and_swiper_wrapper}>
          <div className={styles.information_text}>
            <H1WithBr />
            <div className={styles.btns}>
              <MediumButton text={"Рассчитать стоимость"} link={"/catalog"} zoom={1} />
              <MediumButton text={"Посмотреть дома"} link={"/built_houses"} zoom={1} />
            </div>
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
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/information1.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/information2.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/information3.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/information4.jpg`} alt="information" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img} style={{ width: "100%", height: "100%" }} src={`./img/information5.jpg`} alt="information" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.information_mission}>
          <H2 text={"Миссия"} size={"small"} />
          <H3
            texts={[
              "С 2016 года честно и надежно строим дома, в которых хочется жить. Свой дом — это просто!",
              "",
              "Фиксированная стоимость в договоре – без переплат",
              "Собственное бригады – контроль качества на всех этапах",
              "Строим по одобренной технологии с утеплением до -30°C",
              "Фиксируем стоимость на этапе проектирования",
            ]}
          />
          <MediumButton text="Посмотреть договор" link={"/"} zoom={1} />
        </div>
      </div>
    </section>
  );
}
