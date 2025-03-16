// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header({ setBodyStyle }: { setBodyStyle: React.Dispatch<React.SetStateAction<string>> }) {
  const [navMenuState, setNavMenuState] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header_mob}>
        <div
          onClick={() => {
            navMenuState ? setNavMenuState(false) : setNavMenuState(true);
            setBodyStyle("hidden");
          }}
          className={styles.menu_button}
        >
          <div className={styles.menu_line}></div>
          <div className={styles.menu_line}></div>
        </div>

        <div className={styles.menu} style={{ opacity: navMenuState ? "1" : "0", zIndex: navMenuState ? "20" : "-1" }}>
          <button
            onClick={() => {
              setNavMenuState(false);
              setBodyStyle("");
            }}
            className={styles.close_button}
          >
            <img src={"./icons/cross.svg"} alt="cross" />
          </button>

          <div className={styles.wrapper}>
            <div className={styles.links}>
              <Link to={"/catalog"}>Каталог</Link>
              <Link to={"/built_houses"}>Построенные дома</Link>
              <a href="">Экскурсия</a>
              <a href="">Участок</a>
              <a href="">Контакты</a>
            </div>
            <div className={styles.texts}>
              <p>Телефоны</p>
              <a href="">+7(495)374-74-77</a> <br /> <br />
              <a href="">+7(919)784-33-96</a>
              <p>Адрес</p>
              <a href="">г. Подольск, Февральская ул., д. 57с1, оф. 107</a>
              <div className={styles.icons}>
                <a href="https://t.me/+79300358074">
                  <img src={"./icons/TelegramIcon.svg"} alt="" />
                </a>
                <a href="https://wa.me/79300358074">
                  <img src={"./icons/WhatsappIcon.svg"} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background} style={{ opacity: navMenuState ? "0.7" : "0", zIndex: navMenuState ? "15" : "-1" }}></div>
      </header>
      <header className={styles.header_desc}>
        <Link to={"/catalog"}>Каталог</Link>
        <Link to={"/built_houses"}>Построенные дома</Link>
        <a href="">Экскурсия</a>
        <a href="">Участок</a>
        <a href="">Контакты</a>
      </header>
    </>
  );
}
