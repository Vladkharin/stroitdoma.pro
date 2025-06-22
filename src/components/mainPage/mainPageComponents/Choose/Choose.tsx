import { useState } from "react";
import { MediumButton } from "../../../buttons/Buttons";
import { H2 } from "../../../titles/Titles";
import styles from "./Choose.module.css";
import { FormModal } from "../../../modals/formModal/FormModal";

export function Choose({ setBodyStyle }: { setBodyStyle: React.Dispatch<React.SetStateAction<string>> }) {
  const [stateModalForm, setStateModalForm] = useState(false);

  return (
    <>
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
            <MediumButton text={"Выбрать свой дом"} link="/catalog" zoom={1} />
          </div>
          <div className={styles.tile}>
            <div className={styles.tile_figure}>
              <h3>Строим 8 лет</h3>
              <p className={styles.text}>
                Сделали счастливыми уже более 830 семей. Предлагаем широкий выбор домов, адаптированных под ваш бюджет. У нас опытные
                бригады, проверенные технологии, только лучшие материалы и подрядчики. На каждом этапе выполняется технический надзор.
              </p>
            </div>
            <MediumButton text={"Задать вопрос о строительстве"} link="https://wa.clck.bar/79251047452" zoom={1} />
          </div>
          <div className={styles.tile}>
            <div className={styles.tile_figure}>
              <h3>Под ключ в 1 ипотеку</h3>
              <p className={styles.text}>
                Мы предлагаем готовые решения «под ключ»: участки и дома с отделкой и коммуникациями. Вы можете приобрести их в рамках одной
                ипотечной программы.{" "}
              </p>
            </div>
            <MediumButton text={"Рассчитать ипотеку"} link={""} stateModalForm={true} setStateModalForm={setStateModalForm} zoom={1} />
          </div>
        </div>
      </section>
      <FormModal stateModal={stateModalForm} setStateModal={setStateModalForm} setBodyStyle={setBodyStyle} />
    </>
  );
}
