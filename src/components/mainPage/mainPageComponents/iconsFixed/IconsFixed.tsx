import styles from "./IconsFixed.module.css";

type ICONS = {
  name: string;
  link: string;
};

const icons: ICONS[] = [
  { name: "TelegramIcon.svg", link: "https://t.me/+79197843396" },
  { name: "WhatsappIcon.svg", link: "https://wa.me/79197843396" },
];

export function IconsFixed() {
  return (
    <>
      <div className={styles.menu_button}>
        <div className={styles.menu_line}></div>
        <div className={styles.menu_line}></div>
      </div>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <a key={index} href={icon.link} className={styles.icon_link}>
            <img className={styles.icon} src={"./icons/" + icon.name} alt={"social media"} />
          </a>
        ))}
      </div>
      <div className={styles.side_inscription}>Stroit doma</div>
    </>
  );
}
