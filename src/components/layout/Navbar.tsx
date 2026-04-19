import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close, github, linkedin, whatsappIcon } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white transition-colors`}
            >
              <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
            </li>
          ))}
          
          <li className="flex items-center gap-4 border-l border-secondary/30 pl-6 ml-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg border border-secondary/50 text-secondary hover:text-white hover:border-white transition-all text-[14px] font-bold min-w-[45px]"
            >
              {t("nav.language")}
            </button>
            <a href={config.html.github} target="_blank" rel="noreferrer">
              <img src={github} alt="github" className="h-6 w-6 object-contain hover:scale-110 transition-transform" />
            </a>
            <a href={config.html.linkedin} target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" className="h-6 w-6 object-contain filter invert hover:scale-110 transition-transform" />
            </a>
            <a href={config.html.whatsapp} target="_blank" rel="noreferrer">
              <img src={whatsappIcon} alt="whatsapp" className="h-[26px] w-[26px] object-contain text-white filter invert hover:scale-110 transition-transform" />
            </a>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-lg border border-secondary/50 text-secondary font-bold text-[14px]"
          >
            {t("nav.language")}
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
