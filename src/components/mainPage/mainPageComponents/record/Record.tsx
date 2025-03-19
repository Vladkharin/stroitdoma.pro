import styles from "./Record.module.css";

import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { useState } from "react";
import { H1, H4 } from "../../../titles/Titles";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function Record() {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [fetchStatus, setFetchStatus] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [inputsError, setInputsError] = useState<{ inputName: string; inputPhone: string }>({
  //   inputName: "",
  //   inputPhone: "",
  // });

  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 text={"Запись на экскурсию"} />
          <div className={styles.wrapper}>
            <H4 texts={["Посмотрите, как мы строим,", "прежде чем заключать договор.", "Каждые выходные показываем клиентам стройку."]} />

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
                Записаться
              </button>
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
