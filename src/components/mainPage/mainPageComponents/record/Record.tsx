import styles from "./Record.module.css";

import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { useState } from "react";
import { H1, H4 } from "../../../titles/Titles";
import { postData } from "./Record.services";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function Record() {
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
          <H1 text={"Запись на экскурсию"} />
          <div className={styles.wrapper}>
            <H4 texts={["Посмотрите, как мы строим,", "прежде чем заключать договор.", "Каждые выходные показываем клиентам стройку."]} />

            <form className={styles.form} onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus)}>
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
                name={"user_phone"}
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
                <div className={fetchStatus === "Загрузка..." ? styles.none : styles.block}>Записаться</div>
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
              <div
                className={`${styles.modal} ${
                  fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..." ? "" : styles.none
                }`}
              >
                <div className={styles.modal_wrapper}>
                  <img src="./icons/crestikBlack.svg" alt="" className={styles.modal_btn_close} onClick={() => setFetchStatus("")} />
                  <div className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? styles.complete : styles.failure}></div>
                  <div className={styles.modal_text}>{fetchStatus}</div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.img_wrap}>
          <img className={styles.img} src={`./img/record.jpg`} alt="" />
        </div>
      </div>
    </section>
  );
}
