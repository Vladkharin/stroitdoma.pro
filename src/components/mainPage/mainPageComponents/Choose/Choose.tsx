import { H2 } from "../../../titles/Titles";
import styles from "./Choose.module.css";

export function Choose() {
  return (
    <section className={styles.section}>
      <H2 text={"Почему выбирают строить со СТРОИТ?"} size="big" />
      <div className={styles.wrapper}>
        <div className={styles.tile}>
          <div className={styles.tile_figure}>
            <h3>Комплектация</h3>
            <p className={styles.text}>
              Можно выбрать вариант дома на любой бюджет и самому рассчитать финальную цену <br /> в калькуляторе.
            </p>
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tile_figure}>
            <h3>Строим 8 лет</h3>
            <p className={styles.text}>Опытные бригады, собственная проверенная технология, лучшие материалы и подрядчики.</p>
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tile_figure}>
            <h3>Под ключ в 1 ипотеку</h3>
            <p className={styles.text}>Участок и дом со всей отделкой и коммуникациями можно заказать в 1 ипотеку.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
