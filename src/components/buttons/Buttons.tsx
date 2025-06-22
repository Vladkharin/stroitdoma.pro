import { typeChoiceTypeHouse } from "../catalogPage/CatalogPage";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

export function MediumButton({
  link,
  text,
  zoom = 1,
  stateModalForm,
  setStateModalForm,
}: {
  link: string;
  text: string;
  zoom: number;
  stateModalForm?: boolean;
  setStateModalForm?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (stateModalForm && setStateModalForm) {
    return (
      <button
        className={styles.medium_button}
        style={{ zoom: zoom }}
        onClick={() => {
          setStateModalForm(true);
        }}
      >
        {text}
      </button>
    );
  }
  return (
    <Link
      to={stateModalForm ? "" : link}
      className={styles.medium_button}
      style={{ zoom: zoom }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
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
    <Link
      className={styles.medium_button}
      style={{ zoom: zoom }}
      to={link}
      onClick={() => {
        setActiveTab(state);
        window.scrollTo(0, 0);
      }}
    >
      {text}
    </Link>
  );
}
