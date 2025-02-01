// import React, { useState } from "react";
// import { FormModal } from "./formModal/FormModal";
import styles from "./Information.module.css";

export function Information() {
  return (
    <section className={styles.information}>
      <div className={"container"}>
        <div className={styles.information_wrapper}>
          <div className={styles.information_text}>
            <div className={styles.text}>
              СТРОИТ - <br /> компания честно строит каркасные дома в Москве и Подмосковье
            </div>
            <button className={styles.button}></button>
          </div>
          <div className={styles.information_imgs}></div>
        </div>
      </div>
    </section>
  );
}
