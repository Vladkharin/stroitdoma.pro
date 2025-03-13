import { H1 } from "../../../titles/Titles";
import styles from "./PlotHouse.module.css";

export function PlotHouse() {
  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 text={"Участок + дом"} />
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>Если у вас нет участка, поможем в подборе подходящего. Все в 1 ипотеку!</div>
            <button className={styles.button}>Подробнее</button>
          </div>
        </div>

        <div className={styles.img_wrap}>
          <img className={styles.img} src={"./img/PoltHouse1.jpg"} alt="" />
        </div>
      </div>
    </section>
  );
}
