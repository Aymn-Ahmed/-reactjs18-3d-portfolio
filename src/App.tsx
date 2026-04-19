import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Architecture,
} from "./components";
import { useEffect } from "react";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const title = i18n.language === 'ar' 
      ? "أيمن أحمد — مطور تطبيقات متكامل" 
      : "Ayman Ahmed — Full Stack Developer";
    document.title = title;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <StarsCanvas />
        <div className="bg-gradient-to-b from-[#050816] via-[#151030] to-[#050816] bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Architecture />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
