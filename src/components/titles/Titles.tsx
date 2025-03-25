import React from "react";
import styles from "./titles.module.css";

export function H1({ texts }: { texts: string[] }) {
  return (
    <h1 className={styles.h1}>
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {text}
          <br />
        </React.Fragment>
      ))}
    </h1>
  );
}

export function H1Black({ text }: { text: string }) {
  return (
    <h1 className={styles.h1} style={{ color: "black" }}>
      {text}
    </h1>
  );
}

export function H1White({ text }: { text: string }) {
  return (
    <h1 className={styles.h1} style={{ color: "white" }}>
      {text}
    </h1>
  );
}
export function H1WithBr() {
  return (
    <h1 className={styles.h1}>
      компания <br className={styles.br} />
      СТРОИТ <br className={styles.br} />
      каркасные дома <br className={styles.br} />
      в Москве <br className={styles.br} />
      и Подмосковье <br className={styles.br} />
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
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {text}
          <br />
        </React.Fragment>
      ))}
    </h3>
  );
}

export function H4({ texts, color }: { texts: string[]; color: string }) {
  return (
    <h4 className={styles.h4} style={{ color: color }}>
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {text}
          <br />
        </React.Fragment>
      ))}
    </h4>
  );
}
