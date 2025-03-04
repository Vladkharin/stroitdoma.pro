import "./app.css";
// import "./stylePages.css";
import "./fonts/stylesheet.css";
import { MainPage } from "./components/mainPage/MainPage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { PaymentPage } from "./components/paymentPage/PaymentPage";

function App() {
  // const [scroll, setScroll] = useState(0);
  // const [mainPage] = useState("/");
  const [bodyStyle, setBodyStyle] = useState("");

  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    document.body.style.overflow = bodyStyle;
  });

  return (
    <Router>
      <Header setBodyStyle={setBodyStyle} />
      <Routes>
        <Route path={"/:anchor?"} element={<MainPage />} />
        <Route path={"/payment"} element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
