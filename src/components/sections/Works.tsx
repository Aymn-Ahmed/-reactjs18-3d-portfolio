import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import ImageGrid from "../atoms/ImageGrid";

const projectImages = import.meta.glob(
  "../../assets/projects/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const getProjectScreenshots = (projectId?: string) => {
  if (!projectId) return [];
  const matchingUrls = Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${projectId}/`))
    .map(([_, url]) => url);
  return matchingUrls.map((url, i) => ({
    id: i,
    src: url,
    title: `Screenshot ${i + 1}`,
  }));
};

const ProjectCard: React.FC<{ index: number; onClick: () => void } & TProject> = ({
  index,
  id,
  tags,
  image,
  sourceCodeLink,
  liveLink,
  isCommercial,
  onClick,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div style={{ perspective: "1000px" }}>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateX: [0, 6, -6, 0],
            rotateY: [0, -8, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
            repeatType: "loop",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
            <div
              onClick={onClick}
              className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] cursor-pointer hover:bg-black-100 transition-colors"
            >
              <div className="relative h-[230px] w-full">
                <img src={image} alt="project_image" className="h-full w-full rounded-2xl object-cover" />
                
                {isCommercial && (
                  <div className={`absolute top-3 ${isArabic ? 'right-3' : 'left-3'} z-10`}>
                    <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-pulse border border-white/20 uppercase tracking-wider">
                      {t("sections.works.commercialBadge")}
                    </div>
                  </div>
                )}

                <div className="card-img_hover absolute inset-0 m-3 flex justify-end items-start gap-2">
                  {liveLink && (
                    <div
                      onClick={(e) => { e.stopPropagation(); window.open(liveLink, "_blank"); }}
                      className="flex h-10 px-3 cursor-pointer items-center justify-center rounded-full bg-green-600/90 hover:bg-green-500 transition-all shadow-lg gap-1"
                      title="Visit Live Site"
                    >
                      <span className="text-white text-[11px] font-bold">🔗 {isArabic ? "مباشر" : "Live"}</span>
                    </div>
                  )}
                  <div
                    onClick={(e) => { e.stopPropagation(); window.open(sourceCodeLink, "_blank"); }}
                    className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-lg"
                  >
                    <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
                  </div>
                </div>
              </div>

              <div className="mt-5" dir={isArabic ? "rtl" : "ltr"}>
                <h3 className="text-[20px] font-bold text-white">{t(`projects.${id}.name`)}</h3>
                <p className="text-secondary mt-2 text-[14px] leading-relaxed line-clamp-3">
                  {t(`projects.${id}.description`)}
                </p>
              </div>

              <div className={`mt-4 flex flex-wrap gap-2 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color} font-medium`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <Header
        useMotion={true}
        p={t("sections.works.p")}
        h2={t("sections.works.h2")}
      />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`text-secondary mt-3 max-w-3xl text-[17px] leading-[30px] ${isArabic ? 'text-right' : 'text-left'}`}
        >
          {t("sections.works.content")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          const screenshots = getProjectScreenshots(project.id);
          const projectWithScreenshots = { ...project, screenshots };
          return (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...projectWithScreenshots}
              onClick={() => setSelectedProject(projectWithScreenshots)}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl relative cursor-default custom-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              <div className="relative bg-tertiary rounded-t-3xl p-8" dir={isArabic ? "rtl" : "ltr"}>
                <button
                  onClick={closeModal}
                  className={`absolute top-5 ${isArabic ? 'left-5' : 'right-5'} text-white bg-black/30 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 text-lg`}
                >
                  ✕
                </button>

                {selectedProject.image && (
                  <div className="w-full h-52 rounded-2xl overflow-hidden mb-6 bg-black-100">
                    <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                  </div>
                )}

                <h2 className="text-white font-bold text-[28px] sm:text-[34px] leading-tight text-start">
                  {t(`projects.${selectedProject.id}.name`)}
                </h2>
                <p className="text-secondary text-[15px] mt-3 leading-relaxed max-w-3xl text-start">
                  {t(`projects.${selectedProject.id}.description`)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 justify-start">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag.name} className={`text-[13px] font-medium px-3 py-1 rounded-full bg-black/30 ${tag.color}`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5 flex-wrap justify-start">
                  <a
                    href={selectedProject.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-black/40 hover:bg-black/70 transition-all px-4 py-2 rounded-xl"
                  >
                    <img src={github} alt="github" className="w-5 h-5" />
                    {isArabic ? "عرض كود المصدر" : "View Source Code"}
                  </a>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-green-600/80 hover:bg-green-500 transition-all px-4 py-2 rounded-xl"
                    >
                      🔗 {isArabic ? "زيارة الموقع" : "Visit Live Site"}
                    </a>
                  )}
                  {selectedProject.isCommercial && (
                    <a
                      href={`https://wa.me/966540716434?text=Hello%20Ayman,%20I%20am%20interested%20in%20purchasing%20a%20commercial%20license%20for%20the%20${encodeURIComponent(t(`projects.${selectedProject.id}.name`))}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-black text-black bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 border border-amber-600/30"
                    >
                      <span>{t("sections.works.orderLicense")}</span>
                    </a>
                  )}
                </div>
              </div>

              {selectedProject.isCommercial && (
                <div className="px-8 pt-4 pb-0" dir={isArabic ? "rtl" : "ltr"}>
                  <div className="bg-amber-400/5 border border-amber-500/20 rounded-3xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-black text-xl shadow-lg shadow-amber-500/20">
                        ⚡
                      </div>
                      <div className="text-start">
                        <h4 className="text-white font-bold text-[18px]">{t("sections.works.highlights")}</h4>
                        <p className="text-amber-400/80 text-[12px] font-medium tracking-wide uppercase">{t("sections.works.availablePurchase")}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      {[0,1,2,3,4,5].map((i) => (
                        <div key={i} className="flex items-center gap-3 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
                          <p className="text-secondary group-hover:text-white transition-colors text-[14px] leading-relaxed text-start">
                            {t(`projects.${selectedProject.id}.features.${i}`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-white font-semibold text-[20px] mb-6 flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className="w-1 h-6 bg-violet-500 rounded-full inline-block" />
                  {isArabic ? "صور المشروع" : "Project Screenshots"}
                </h3>
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                  <ImageGrid images={selectedProject.screenshots} columns={2} />
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                    <div className="text-6xl">📂</div>
                    <p className="text-secondary text-[18px] font-semibold">{isArabic ? "لا توجد صور لهذا المشروع" : "No images for this project"}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
