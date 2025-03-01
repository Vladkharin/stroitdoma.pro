import { Information } from "./mainPageComponents/information/Information";

import { useEffect } from "react";
import { IconsFixed } from "./mainPageComponents/iconsFixed/IconsFixed";
import { Choose } from "./mainPageComponents/Choose/Choose";
import { Catalog } from "./mainPageComponents/Catalog/Catalog";
import { BuiltHouses } from "./mainPageComponents/builtHouses/builtHouses";
import { Record } from "./mainPageComponents/record/Record";
import { PlotHouse } from "./mainPageComponents/plotHouse/PlotHouse";
import { Footer } from "../footer/Footer";

export function MainPage() {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
    document.title = "Каркасные дома | Строит Дома";
  }, []);

  return (
    <>
      <IconsFixed />
      <Information />
      <Choose />
      <Catalog />
      <BuiltHouses />
      <Record />
      <PlotHouse />
      <Footer />
    </>
  );
}
