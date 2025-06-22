import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import styles from "./form.module.css";
import { typeInputsError } from "../../typesAndIntefaces";
import React, { useEffect, useState } from "react";
import { postData } from "./formModal.service";
import { FormCompleteModal } from "../formCompleteModal/formCompleteModal";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function FormModal({
  stateModal,
  setStateModal,
  setBodyStyle,
}: {
  stateModal: boolean;
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  const [fetchStatus, setFetchStatus] = useState<string>("");
  const [inputsError, setInputsError] = useState<typeInputsError>({
    inputName: "",
    inputPhone: "",
  });

  useEffect(() => {
    if (stateModal) {
      setBodyStyle("hidden");
    } else {
      setBodyStyle("");
    }
  });

  return (
    <div className={`${styles.feedBack} ${stateModal ? styles.flex : styles.none}`}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus)}>
          <div className={styles.header}>Оставьте заявку</div>
          <input
            className={`${styles.text_input} ${styles.required} ${inputsError.inputName != "" ? styles.error : ""}`}
            name="user_name"
            type="text"
            placeholder="Ваше имя"
            onChange={() => {
              setInputsError({
                inputName: "",
                inputPhone: "",
              });
              setFetchStatus("");
            }}
          />

          <MaskedInput
            maskGenerator={maskGenerator}
            className={`${styles.phone_input} ${styles.required} ${inputsError.inputPhone != "" ? styles.error : ""}`}
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
          <button type="submit" className={styles.btn_submit}>
            <div className={fetchStatus === "Загрузка..." ? `${styles.loader} ${styles.block}` : `${styles.loader} ${styles.none}`}></div>
            <div className={fetchStatus === "Загрузка..." ? styles.none : styles.block}>Отправить</div>
          </button>
          <div className={styles.imgs}>
            <a href="https://t.me/+79300358074">
              <img src="./icons/TelegramGreyIcon.svg" alt="" className={styles.img} />
            </a>
            <a href="https://wa.me/79300358074">
              <img src="./icons/WhatsappGreyIcon.svg" alt="" className={styles.img} />
            </a>
          </div>

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
          <div className={styles.form_btn_close} onClick={() => setStateModal(false)}>
            <img src="./icons/cross.svg" alt="" />
          </div>
        </form>
      </div>
      <FormCompleteModal fetchStatus={fetchStatus} setFetchStatus={setFetchStatus} setBodyStyle={setBodyStyle} />
    </div>
  );
}
