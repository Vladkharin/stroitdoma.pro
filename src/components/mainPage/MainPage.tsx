import { Information } from "./mainPageComponents/information/Information";
import { useEffect } from "react";
import { Choose } from "./mainPageComponents/Choose/Choose";
import { Catalog } from "./mainPageComponents/Catalog/Catalog";
import { BuiltHouses } from "./mainPageComponents/builtHouses/builtHouses";
import { Record } from "./mainPageComponents/record/Record";
import { PlotHouse } from "./mainPageComponents/plotHouse/PlotHouse";
import { typeChoiceTypeHouse } from "../catalogPage/CatalogPage";
import { IconsFixed } from "../iconsFixed/IconsFixed";

export function MainPage({
  positionImg,
  setActiveTab,
  setBodyStyle,
}: {
  positionImg: string;
  setActiveTab: React.Dispatch<React.SetStateAction<typeChoiceTypeHouse>>;
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
}) {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
    document.title = "Каркасные дома | Строит Дома";
  }, []);

  return (
    <>
      <IconsFixed path={"."} />
      <Information />
      <Choose />
      <Catalog setActiveTab={setActiveTab} />
      <BuiltHouses />
      <Record setBodyStyle={setBodyStyle} />
      <PlotHouse positionImg={positionImg} />
    </>
  );
}
