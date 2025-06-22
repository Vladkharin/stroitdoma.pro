import { IconsFixed } from "../iconsFixed/IconsFixed";
import styles from "./StubPage.module.css";

export function StubPage() {
  return (
    <>
      <IconsFixed path={"."} />
      <div className={styles.text}>Ведутся технические работы</div>
    </>
  );
}
