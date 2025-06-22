import { H1, H4 } from "../../../titles/Titles";
import styles from "./PlotHouse.module.css";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { SetStateAction, useState } from "react";
import { FormCompleteModal } from "../../../modals/formCompleteModal/formCompleteModal";
import { postData } from "./PlotHouse.service";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function PlotHouse({ positionImg, setBodyStyle }: { positionImg: string; setBodyStyle: React.Dispatch<SetStateAction<string>> }) {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  const [fetchStatus, setFetchStatus] = useState<string>("");
  const [inputsError, setInputsError] = useState<{ inputName: string; inputPhone: string }>({
    inputName: "",
    inputPhone: "",
  });
  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 texts={["Ваш дом с участком ближе, чем кажется!"]} />
          <div className={styles.wrapper}>
            <H4
              color="black"
              texts={["Не нашли землю? Бесплатно подберем идеальный вариант! ", "Оформление дома и участка — в одну ипотеку без хлопот.  "]}
            />
            <form className={styles.form} onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus, setBodyStyle)}>
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

              <button type="submit" className={styles.submit}>
                <div
                  className={fetchStatus === "Загрузка..." ? `${styles.loader} ${styles.block}` : `${styles.loader} ${styles.none}`}
                ></div>
                <div className={fetchStatus === "Загрузка..." ? styles.none : styles.block}>Подробнее</div>
              </button>

              <div
                className={`${styles.error_text} ${styles.position_error_first_input} ${
                  inputsError.inputName == "Обязательное поле" ? styles.block : styles.none
                }`}
              >
                Обязательное поле
              </div>
              <div
                className={`${styles.error_text} ${styles.position_error_first_input} ${
                  inputsError.inputName == "Слишком длинное значение" ? styles.block : styles.none
                }`}
              >
                Слишком длинное значение
              </div>
              <div
                className={`${styles.error_text} ${styles.position_error_second_input} ${
                  inputsError.inputPhone == "Обязательное поле" ? styles.block : styles.none
                }`}
              >
                Обязательное поле
              </div>
              <div
                className={`${styles.error_text} ${styles.position_error_second_input} ${
                  inputsError.inputPhone == "Слишком короткое значение" ? styles.block : styles.none
                }`}
              >
                Слишком короткое значение
              </div>
            </form>
          </div>
        </div>

        <div className={styles.img_wrap}>
          <img className={styles.img} src={`./img/plotHouse_${positionImg}.jpg`} alt="" />
        </div>
      </div>
      <FormCompleteModal fetchStatus={fetchStatus} setFetchStatus={setFetchStatus} setBodyStyle={setBodyStyle} />
    </section>
  );
}
