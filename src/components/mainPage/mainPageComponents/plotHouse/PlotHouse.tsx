import { MediumButton } from "../../../buttons/Buttons";
import { H1, H4 } from "../../../titles/Titles";
import styles from "./PlotHouse.module.css";

export function PlotHouse({ positionImg }: { positionImg: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.text_and_swiper_wrapper}>
        <div className={styles.block_text}>
          <H1 text={"Участок + дом"} />
          <div className={styles.wrapper}>
            <H4 texts={["Если у вас нет участка, поможем в подборе подходящего. Все в 1 ипотеку!"]} />
            <MediumButton text={"Подробнее"} link={"#"} zoom={1} />
          </div>
        </div>

        <div className={styles.img_wrap}>
          <img className={styles.img} src={`./img/plotHouse_${positionImg}.jpg`} alt="" />
        </div>
      </div>
    </section>
  );
}
