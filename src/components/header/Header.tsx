import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

type typeHeaderProps = {
  scroll: number;
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ scroll, setBodyStyle }: typeHeaderProps) {
  const [menuTel, setMenuTel] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (useLocation().pathname == "/") {
    return (
      <nav className={`${styles.nav} ${scroll > 93 ? styles.nav_blue : ""}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.menu_button}>
              <img
                className={styles.burger}
                src="./icons/MenuIcon.svg"
                alt="MenuIcon"
                onClick={() => {
                  setMenuTel(true);
                  setBodyStyle("hidden");
                }}
              />
              <div className={styles.links}>
                <Link to={"/"} className={styles.link} onClick={scrollToTop}>
                  Главная
                </Link>
                <Link to="/catalog" className={styles.link} onClick={scrollToTop}>
                  Каталог
                </Link>
                <Link to="/built_houses" className={styles.link} onClick={scrollToTop}>
                  Построенные дома
                </Link>
                <a href="#contacts" className={styles.link}>
                  Контакты
                </a>
              </div>
            </div>
            {MenuIconsRu()}
            {MenuTelehoneRu()}
          </div>
        </div>
        {Menu(menuTel, setMenuTel, setBodyStyle)}
      </nav>
    );
  } else {
    return (
      <nav className={styles.page_nav}>
        <div className="container">
          <div className={styles.page_wrapper}>
            <div className={styles.page_menu}>
              <Link to={"/"} className={styles.page_link_to_main_page}>
                На главную
              </Link>
            </div>
            {MenuIconsRu()}
          </div>
        </div>
      </nav>
    );
  }
}

function Menu(
  menuTel: boolean,
  setMenuTel: React.Dispatch<React.SetStateAction<boolean>>,
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>
) {
  let overlayClass = styles.overlay;
  let menuClass = styles.menu;
  if (menuTel) {
    overlayClass = `${styles.overlay} ${styles.block}`;
    menuClass = `${styles.menu} ${styles.visible}`;
  }

  return (
    <>
      <div className={overlayClass} onClick={() => setMenuTel(false)}></div>
      <div className={menuClass}>
        <div className={styles.menu_links}>
          <a
            href="#about"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            О нас
          </a>
          <a
            href="#catalog"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Каталог
          </a>
          <a
            href="#record"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Запись на экскурсию
          </a>

          <MenuIconsRu />
        </div>
        <button
          className={styles.close_button}
          onClick={() => {
            setMenuTel(false);
            setBodyStyle("");
          }}
        >
          {" "}
        </button>
      </div>
    </>
  );
}

function MenuIconsRu() {
  return (
    <div className={styles.icons}>
      <a target="_blank" href="https://teleg.run/Like_House_org" className={styles.icon}>
        <img src="./icons/TelegramIcon.svg" alt="" />
      </a>
      <a target="_blank" href="https://wa.clck.bar/79251047452" className={styles.icon}>
        <img src="./icons/WhatsappIcon.svg" alt="" />
      </a>
      <a id="phone" href="tel:+74951277452" className={`${styles.icon} ${styles.phone}`}>
        <img src="./icons/PhoneIcon.svg" alt="" />
      </a>
    </div>
  );
}

function MenuTelehoneRu() {
  return (
    <div className={styles.item_title}>
      <a className={styles.item_link} href="tel:+79197843396 ">
        +7 919 784-33-96
      </a>{" "}
      <br />
      <span>(WhatsApp)</span>
    </div>
  );
}
