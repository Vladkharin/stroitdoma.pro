import { H1, H4 } from "../../../titles/Titles";
import styles from "./PlotHouse.module.css";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { useState } from "react";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function PlotHouse({ positionImg }: { positionImg: string }) {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");

  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 text={"Участок + дом"} />
          <div className={styles.wrapper}>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder={"Ваше имя"}
                name={"user_name"}
                // onChange={() => {
                //   setInputsError({
                //     inputName: "",
                //     inputPhone: "",
                //   });
                //   setFetchStatus("");
                // }}
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
                  //   setInputsError({
                  //     inputName: "",
                  //     inputPhone: "",
                  //   });
                  //   setFetchStatus("");
                }}
              />

              <button className={styles.submit} type={"submit"}>
                Подробнее
              </button>
            </form>
            <H4 texts={["Если у вас нет участка, поможем в подборе подходящего.", "Все в 1 ипотеку!"]} />
          </div>
        </div>

        <div className={styles.img_wrap}>
          <img className={styles.img} src={`./img/plotHouse_${positionImg}.jpg`} alt="" />
        </div>
      </div>
    </section>
  );
}
