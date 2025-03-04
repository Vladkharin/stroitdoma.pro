import styles from "./Catalog.module.css";

export function Catalog() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Линейки домов </h2>
      <div className={styles.wrapper}>
        <div className={styles.tile}>
          <img src={"./img/Boxmate__021.jpg"} alt="" />
          <p className={styles.name}>Каталог</p>
          <a>Зайти</a>
        </div>
        <div className={styles.tile}>
          <img src={"./img/Boxmate_new_10_.jpg"} alt="" />
          <p className={styles.name}>1 этаж</p>
          <a>Зайти</a>
        </div>
        <div className={styles.tile}>
          <img src={"./img/img_-_2023-11-10T005.png"} alt="" />
          <p className={styles.name}>2 этажа</p>
          <a>Зайти</a>
        </div>
        <div className={styles.tile}>
          <img src={"./img/photo_2024-03-18_10-.jpg.jpg"} alt="" />
          <p className={styles.name}>Бани</p>
          <a>Зайти</a>
        </div>
      </div>
    </section>
  );
}
