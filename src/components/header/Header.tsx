// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

export function Header({ setBodyStyle }: { setBodyStyle: React.Dispatch<React.SetStateAction<string>> }) {
  const [navMenuState, setNavMenuState] = useState<boolean>(false);

  return (
    <>
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
        <button className={styles.close_button}></button>
      </div>
      <div className={styles.background} style={{ opacity: navMenuState ? "0.7" : "0", zIndex: navMenuState ? "15" : "-1" }}></div>
    </>
  );
}
