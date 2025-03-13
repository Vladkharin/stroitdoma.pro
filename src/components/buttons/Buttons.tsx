import styles from "./Buttons.module.css";

export function MediumButton({ link, text }: { link: string; text: string }) {
  return (
    <button className={styles.medium_button}>
      {" "}
      <a href={link}>{text}</a>
    </button>
  );
}
