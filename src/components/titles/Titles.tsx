import styles from "./titles.module.css";

export function H1({ text }: { text: string }) {
  return <h1 className={styles.h1}>{text}</h1>;
}

export function H1WithBr() {
  return (
    <h1 className={styles.h1}>
      компания <br className={styles.br} />
      СТРОИТ <br className={styles.br} />
      каркасные дома <br className={styles.br} />
      в Москве и Подмосковье <br className={styles.br} />
      честно и на любой бюджет
    </h1>
  );
}

export function H2({ text, size }: { text: string; size: string }) {
  return <h2 className={size == "small" ? styles.h2_small : styles.h2_big}>{text}</h2>;
}

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

export function H4({ texts }: { texts: string[] }) {
  return (
    <h4 className={styles.h4}>
      {texts.map((text) => (
        <>
          {text}
          <br />
        </>
      ))}
    </h4>
  );
}
