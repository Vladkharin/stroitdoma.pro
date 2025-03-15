import { typeChoiceTypeHouse } from "../catalogPage/CatalogPage";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

export function MediumButton({ link, text, zoom = 1 }: { link: string; text: string; zoom: number }) {
  return (
    <Link to={link} className={styles.medium_button} style={{ zoom: zoom }}>
      {text}
    </Link>
  );
}

export function CatalogButton({
  link,
  text,
  zoom,
  state,
  setActiveTab,
}: {
  link: string;
  text: string;
  zoom: number;
  state: typeChoiceTypeHouse;
  setActiveTab: React.Dispatch<React.SetStateAction<typeChoiceTypeHouse>>;
}) {
  return (
    <Link className={styles.medium_button} style={{ zoom: zoom }} to={link} onClick={() => setActiveTab(state)}>
      {text}
    </Link>
  );
}
