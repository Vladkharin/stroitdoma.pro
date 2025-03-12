import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper_mob}>
        <div className={styles.item}>
          <h3 className={styles.title}>Разделы</h3>
          <a className={styles.link} href="#">
            Каталог
          </a>
          <a className={styles.link} href="#">
            Построенные дома
          </a>
          <a className={styles.link} href="#">
            Новости
          </a>
          <a className={styles.link} href="#">
            Технология
          </a>
        </div>

        <div className={styles.line}></div>
        <div className={styles.item}>
          <h3 className={styles.title}>Соц. сети</h3>
          <a className={styles.link} href={"https://t.me/stroitdoma"}>
            Telegram{" "}
          </a>{" "}
          <br />
          <a className={styles.link} href={"https://www.instagram.com/stroitdoma.pro"}>
            Instagram{" "}
          </a>{" "}
          <br />
          <a className={styles.link} href={"https://www.youtube.com/@stroitdoma_pro"}>
            YouTube{" "}
          </a>{" "}
          <br />
          <a className={styles.link} href={"https://vk.com/stroitdoma_pro"}>
            ВКонтакте{" "}
          </a>{" "}
          <br />
        </div>
        <div className={styles.line}></div>

        <div className={styles.item_tel}>
          <p className={styles.text}>
            Телефон: <br /> <br />
            <a className={styles.link} href="tel:+74953747477">
              +7(495)374-74-77
            </a>{" "}
            <br />
            <br />{" "}
            <a className={styles.link} href="tel:+79197843396">
              +7(919)784-33-96
            </a>{" "}
            <br /> <br />
            Мессенджеры: <br />
            <br />{" "}
            <a className={styles.link} href={"https://wa.me/79197843396"}>
              Whatsapp
            </a>{" "}
            <br />{" "}
            <a className={styles.link} href={"https://t.me/+79197843396"}>
              Telegram
            </a>{" "}
            <br /> <br /> Адрес офиса: <br /> <br /> г. Подольск, Февральская ул., д. 57с1, оф. 107
          </p>
          <p className={styles.subtext}>
            2017-2025 CТРОИТ <br /> ИНН 9721078560 <br /> ОГРН 1197746218130
          </p>
        </div>
      </div>
      <div className={styles.wrapper_desc}>
        <div className={styles.item}>
          <h3 className={styles.title}>Разделы</h3>
          <a className={styles.link} href="#">
            Каталог
          </a>
          <a className={styles.link} href="#">
            Построенные дома
          </a>
          <a className={styles.link} href="#">
            Новости
          </a>
          <a className={styles.link} href="#">
            Технология
          </a>
        </div>
        <div className={styles.line}></div>
        <div className={styles.right_side}>
          <div className={styles.item}>
            <h3 className={styles.title}>Соц. сети</h3>
            <a className={styles.link} href={"https://t.me/stroitdoma"}>
              Telegram{" "}
            </a>{" "}
            <br />
            <a className={styles.link} href={"https://www.instagram.com/stroitdoma.pro"}>
              Instagram{" "}
            </a>{" "}
            <br />
            <a className={styles.link} href={"https://www.youtube.com/@stroitdoma_pro"}>
              YouTube{" "}
            </a>{" "}
            <br />
            <a className={styles.link} href={"https://vk.com/stroitdoma_pro"}>
              ВКонтакте{" "}
            </a>{" "}
            <br />
          </div>

          <div className={styles.item_tel}>
            <p className={styles.text}>
              Телефон: <br /> <br />
              <a className={styles.link} href="tel:+74953747477">
                +7(495)374-74-77
              </a>{" "}
              <br />
              <br />{" "}
              <a className={styles.link} href="tel:+79197843396">
                +7(919)784-33-96
              </a>{" "}
              <br /> <br />
              Мессенджеры: <br />
              <br />{" "}
              <a className={styles.link} href={"https://wa.me/79300358074"}>
                Whatsapp
              </a>{" "}
              <br />{" "}
              <a className={styles.link} href={"https://t.me/+79300358074"}>
                Telegram
              </a>{" "}
              <br /> <br /> Адрес офиса: <br /> <br /> г. Подольск, Февральская ул., д. 57с1, оф. 107
            </p>
            <p className={styles.subtext}>
              2017-2025 CТРОИТ <br /> ИНН 9721078560 <br /> ОГРН 1197746218130
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
