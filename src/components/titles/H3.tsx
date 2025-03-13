import styles from "./titles.module.css";

export function H3({ texts }: { texts: string[] }) {
  return (
    <h3 className={styles.h3}>
      {texts.map((text) => (
        <>
          {text}
          <br />
        </>
      ))}
    </h3>
  );
}
