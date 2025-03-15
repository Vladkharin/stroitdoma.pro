import { Information } from "./mainPageComponents/information/Information";

import { useEffect } from "react";
import { IconsFixed } from "./mainPageComponents/iconsFixed/IconsFixed";
import { Choose } from "./mainPageComponents/Choose/Choose";
import { Catalog } from "./mainPageComponents/Catalog/Catalog";
import { BuiltHouses } from "./mainPageComponents/builtHouses/builtHouses";
import { Record } from "./mainPageComponents/record/Record";
import { PlotHouse } from "./mainPageComponents/plotHouse/PlotHouse";
import { Footer } from "../footer/Footer";
import { typeChoiceTypeHouse } from "../catalogPage/CatalogPage";

export function MainPage({
  positionImg,
  setActiveTab,
}: {
  positionImg: string;
  setActiveTab: React.Dispatch<React.SetStateAction<typeChoiceTypeHouse>>;
}) {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
    document.title = "Каркасные дома | Строит Дома";
  }, []);

  return (
    <>
      <IconsFixed />
      <Information positionImg={positionImg} />
      <Choose />
      <Catalog setActiveTab={setActiveTab} />
      <BuiltHouses />
      <Record positionImg={positionImg} />
      <PlotHouse positionImg={positionImg} />
      <Footer />
    </>
  );
}
