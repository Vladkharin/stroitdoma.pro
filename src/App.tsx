import "./app.css";
// import "./stylePages.css";
import "./fonts/stylesheet.css";
import { MainPage } from "./components/mainPage/MainPage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { PaymentPage } from "./components/paymentPage/PaymentPage";
import { CatalogPage, typeChoiceTypeHouse } from "./components/catalogPage/CatalogPage";
import { BuiltHousesPage } from "./components/builtHousesPage/BuiltHousesPage";
import { HousePage } from "./components/housePage/HousePage";
import { StubPage } from "./components/stubPage/StubPage";
import { Footer } from "./components/footer/Footer";

function App() {
  const [scroll, setScroll] = useState(0);
  const [bodyStyle, setBodyStyle] = useState("");

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = bodyStyle;
  });

  const [picturePosition, setPicturePosition] = useState("vert");

  const [activeTab, setActiveTab] = useState<typeChoiceTypeHouse>({ type: "all" });

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 480 && width < 961) {
      setPicturePosition("gor");
    } else {
      setPicturePosition("vert");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = bodyStyle;
  });

  return (
    <Router>
      <Header setBodyStyle={setBodyStyle} scroll={scroll} />
      <Routes>
        <Route
          path={"/:anchor?"}
          element={<MainPage positionImg={picturePosition} setActiveTab={setActiveTab} setBodyStyle={setBodyStyle} />}
        />
        <Route path={"/catalog"} element={<CatalogPage setActiveTab={setActiveTab} activeTab={activeTab} />}></Route>
        <Route path={"/built_houses"} element={<BuiltHousesPage />} />
        <Route path={"/catalog/:houseName?"} element={<HousePage />} />
        <Route path={"/stub"} element={<StubPage />} />
        <Route path={"/payment"} element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
