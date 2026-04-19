import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const modules = [
  {
    id: "identity",
    title: "Identity & Security",
    icon: "🔐",
  },
  {
    id: "billing",
    title: "Billing & Finance",
    icon: "💰",
  },
  {
    id: "tenancy",
    title: "Tenancy Management",
    icon: "🏢",
  },
  {
    id: "invoices",
    title: "Invoices & Documents",
    icon: "📄",
  },
];

const Architecture = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <Header
        useMotion={true}
        p={t("sections.architecture.p")}
        h2={t("sections.architecture.h2")}
      />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${isArabic ? 'text-right' : 'text-left'}`}
      >
        {t("sections.architecture.content")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full sm:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <span className="text-[50px]">{module.icon}</span>
              <h3 className="text-white text-[20px] font-bold text-center">
                {t(`modules.${module.id}.title`)}
              </h3>
              <p className="text-secondary text-[14px] text-center">
                {t(`modules.${module.id}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Architecture, "architecture");
