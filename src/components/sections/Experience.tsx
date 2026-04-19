import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        textAlign: isArabic ? "right" : "left",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={t(`experiences.${experience.id}.date`)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div dir={isArabic ? "rtl" : "ltr"}>
        <h3 className="text-[24px] font-bold text-white">
          {t(`experiences.${experience.id}.title`)}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {t(`experiences.${experience.id}.company`)}
        </p>
      </div>

      <ul className={`${isArabic ? "mr-5" : "ml-5"} mt-5 list-disc space-y-2`} dir={isArabic ? "rtl" : "ltr"}>
        {experience.points.map((_, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {t(`experiences.${experience.id}.points.${index}`)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header
        useMotion={true}
        p={t("sections.experience.p")}
        h2={t("sections.experience.h2")}
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
