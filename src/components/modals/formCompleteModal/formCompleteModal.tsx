import React from "react";
import styles from "./formCompleteModal.module.css";

export function FormCompleteModal({
  fetchStatus,
  setFetchStatus,
  setBodyStyle,
}: {
  fetchStatus: string;
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>;
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className={`${styles.modal} ${
        fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..." ? styles.flex : styles.none
      }`}
    >
      <div className={styles.modal_wrapper}>
        <img
          src="../icons/crestikBlack.svg"
          alt=""
          className={styles.modal_btn_close}
          onClick={() => {
            setFetchStatus("");
            setBodyStyle("");
          }}
        />
        <div className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? styles.complete : styles.failure}></div>
        <div className={styles.modal_text}>{fetchStatus}</div>
      </div>
    </div>
  );
}
