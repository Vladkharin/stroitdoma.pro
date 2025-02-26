import { Information } from "./mainPageComponents/information/Information";

import { useEffect } from "react";
import { IconsFixed } from "./mainPageComponents/iconsFixed/IconsFixed";
import { Choose } from "./mainPageComponents/Choose/Choose";

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
    </>
  );
}
