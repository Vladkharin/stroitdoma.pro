import { Information } from "./mainPageComponents/information/Information";
// import { About } from "./mainPageComponents/about/About";
// import { Catalog } from "./mainPageComponents/catalog/Catalog";
// import { Technology } from "./mainPageComponents/technology/Technology";
// import { AdditionalServices } from "./mainPageComponents/additionalServices/AdditionalServices";
// import { Map } from "./mainPageComponents/map/Map";
// import { Team } from "./mainPageComponents/team/Team";
// import { Feedback } from "./mainPageComponents/feedback/Feedback";
import { useEffect } from "react";
import { IconsFixed } from "./mainPageComponents/iconsFixed/IconsFixed";

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
      {/* <About />
      <Catalog />
      <Technology />
      <AdditionalServices />
      <Map /> */}
      {/* <Team /> */}
      {/* <Feedback /> */}
    </>
  );
}
