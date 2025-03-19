import { CatalogButton } from "../../../buttons/Buttons";
import { typeChoiceTypeHouse } from "../../../catalogPage/CatalogPage";
import { H2 } from "../../../titles/Titles";
import styles from "./Catalog.module.css";

export function Catalog({ setActiveTab }: { setActiveTab: React.Dispatch<React.SetStateAction<typeChoiceTypeHouse>> }) {
  return (
    <section className={styles.section}>
      <H2 text={"Каталог"} size="big" />
      <div className={styles.wrapper}>
        <div className={styles.tile}>
          <img src={"./img/catalog_1.jpg"} alt="" />
          <p className={styles.name}>1 этаж</p>
          <CatalogButton text={"Зайти"} link={"/catalog"} zoom={0.5} setActiveTab={setActiveTab} state={{ type: "cottage" }} />
        </div>
        <div className={styles.tile}>
          <img src={"./img/catalog_3.jpg"} alt="" />

          <p className={styles.name}>2 этажа</p>
          <CatalogButton text={"Зайти"} link={"/catalog"} zoom={0.5} setActiveTab={setActiveTab} state={{ type: "two-storey house" }} />
        </div>
        <div className={styles.tile}>
          <img src={"./img/catalog_2.jpg"} alt="" />

          <p className={styles.name}>Бани</p>
          <CatalogButton text={"Зайти"} link={"/catalog"} zoom={0.5} setActiveTab={setActiveTab} state={{ type: "bathhouse" }} />
        </div>
      </div>
    </section>
  );
}
