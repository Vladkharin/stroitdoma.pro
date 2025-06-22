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
      Строим каркасные дома в Москве, области и дальнем Подмосковье <br className={styles.br} /> <br className={styles.br} />
      От 2,8 млн рублей за дом под ключ <br className={styles.br} /> <br className={styles.br} />
      Срок строительства - 90 дней <br className={styles.br} /> <br className={styles.br} />
      Гарантия на конструктив <br className={styles.br} /> <br className={styles.br} />
      Поможем с участком и ипотекой <br className={styles.br} /> <br className={styles.br} />
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
