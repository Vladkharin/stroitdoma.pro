import { H2 } from "../../../titles/Titles";
import styles from "./Catalog.module.css";

export function Catalog() {
  return (
    <section className={styles.section}>
      <H2 text={"Линейки домов"} size="big" />
      <div className={styles.wrapper}>
        <div className={styles.tile}>
          <img src={"./img/catalog_1.jpg"} alt="" />
          <p className={styles.name}>1 этаж</p>
          <a>Зайти</a>
        </div>
        <div className={styles.tile}>
          <img src={"./img/catalog_2.jpg"} alt="" />
          <p className={styles.name}>2 этажа</p>
          <a>Зайти</a>
        </div>
        <div className={styles.tile}>
          <img src={"./img/catalog_3.jpg"} alt="" />
          <p className={styles.name}>Бани</p>
          <a>Зайти</a>
        </div>
      </div>
    </section>
  );
}
