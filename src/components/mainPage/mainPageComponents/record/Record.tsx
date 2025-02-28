import styles from "./Record.module.css";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { useState } from "react";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function Record() {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetchStatus, setFetchStatus] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputsError, setInputsError] = useState<{ inputName: string; inputPhone: string }>({
    inputName: "",
    inputPhone: "",
  });

  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <div className={styles.text}>Запись на экскурсию</div>
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>
              Посмотрите, как мы строим, прежде чем заключать договор. Каждые выходные показываем клиентам стройку.
            </div>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder={"Ваше имя"}
                name={"user_name"}
                onChange={() => {
                  setInputsError({
                    inputName: "",
                    inputPhone: "",
                  });
                  setFetchStatus("");
                }}
              />
              <MaskedInput
                className={styles.input}
                maskGenerator={maskGenerator}
                name="user_phone"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={inputPhoneValue}
                onChange={() => {
                  setInputPhoneValue;
                  setInputsError({
                    inputName: "",
                    inputPhone: "",
                  });
                  setFetchStatus("");
                }}
              />

              <button className={styles.submit} type={"submit"}>
                Записаться
              </button>
            </form>
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
