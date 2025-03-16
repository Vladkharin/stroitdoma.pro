import { Link } from "react-router-dom";
import styles from "./IconsFixed.module.css";

type ICONS = {
  name: string;
  link: string;
};

const icons: ICONS[] = [
  { name: "TelegramIcon.svg", link: "https://t.me/+79300358074" },
  { name: "WhatsappIcon.svg", link: "https://wa.me/79300358074" },
];

export function IconsFixed({ path }: { path: string }) {
  return (
    <>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <a key={index} href={icon.link} className={styles.icon_link}>
            <img className={styles.icon} src={path + "/icons/" + icon.name} alt={"social media"} />
          </a>
        ))}
      </div>
      <Link to={"/"} className={styles.side_inscription}>
        Stroit doma
      </Link>
    </>
  );
}
