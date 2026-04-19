import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { services, getArchitectureDiagrams, architectureDetails } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import ArchitectureModal from "../atoms/ArchitectureModal";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  onClick: () => void;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, onClick }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div 
      className="max-w-[250px] w-full xs:w-[250px] cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px] group-hover:scale-[1.02] transition-transform"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain relative z-10"
          />

          <h3 className="text-center text-[20px] font-bold text-white relative z-10">
            {title}
          </h3>
          
          <button className="text-[12px] text-secondary border border-secondary/30 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            View Architecture
          </button>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  const { t, i18n } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedService]);

  const serviceData = selectedService ? {
    id: selectedService,
    title: t(`services.${selectedService}`),
    description: t(`architecture_descriptions.${selectedService}`),
    diagrams: getArchitectureDiagrams(selectedService),
    tags: architectureDetails[selectedService]?.tags || [],
  } : null;

  return (
    <>
      <Header
        useMotion={true}
        p={t("sections.about.p")}
        h2={t("sections.about.h2")}
      />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`text-secondary mt-4 max-w-3xl text-[17px] leading-[30px] ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}
      >
        {t("sections.about.content")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            index={index}
            {...service}
            title={t(`services.${service.id}`)}
            onClick={() => setSelectedService(service.id || null)}
          />
        ))}
      </div>

      {serviceData && (
        <ArchitectureModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceId={serviceData.id}
          serviceTitle={serviceData.title}
          serviceDescription={serviceData.description}
          diagrams={serviceData.diagrams}
          tags={serviceData.tags}
        />
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
