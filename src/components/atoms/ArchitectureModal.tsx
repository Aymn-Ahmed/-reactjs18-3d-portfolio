import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import useEscapeKey from "../../hooks/useEscapeKey";
import ImageGrid from "./ImageGrid";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  serviceTitle: string;
  serviceDescription: string;
  diagrams: { id: number; src: string; title: string }[];
  tags: { name: string; color: string }[];
}

const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  serviceId,
  serviceTitle,
  serviceDescription,
  diagrams,
  tags,
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEscapeKey(onClose, isOpen);

  if (!serviceId) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.85, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 180 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-primary max-w-5xl w-full sm:max-h-[90vh] max-h-[95vh] overflow-y-auto rounded-3xl sm:rounded-3xl rounded-b-none sm:rounded-b-3xl fixed bottom-0 sm:relative cursor-default custom-scrollbar"
          >
            <div className="relative bg-tertiary sm:rounded-t-3xl p-6 sm:p-8" dir={isArabic ? "rtl" : "ltr"}>
              <button
                onClick={onClose}
                className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'} text-white bg-black/30 hover:bg-black/60 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all z-10 text-base sm:text-lg`}
              >
                ✕
              </button>

              <h2 className="text-white font-bold text-[24px] sm:text-[34px] leading-tight text-start pr-10">
                {serviceTitle}
              </h2>
              
              <div className="mt-4 flex flex-wrap gap-2 justify-start">
                {tags.map((tag) => (
                  <span key={tag.name} className={`text-[11px] sm:text-[13px] font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/30 ${tag.color}`}>
                    #{tag.name}
                  </span>
                ))}
              </div>

              <p className="text-secondary text-[14px] sm:text-[15px] mt-4 sm:mt-6 leading-relaxed max-w-3xl text-start">
                {serviceDescription}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className={`text-white font-semibold text-[18px] sm:text-[20px] mb-4 sm:mb-6 flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="w-1 h-5 sm:h-6 bg-violet-500 rounded-full inline-block" />
                {isArabic ? "مخططات المعمارية" : "Architecture Diagrams"}
              </h3>
              
              {diagrams.length > 0 ? (
                <div className="w-full overflow-hidden">
                  <ImageGrid images={diagrams} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 sm:py-20 text-center gap-4">
                  <div className="text-4xl sm:text-6xl">📂</div>
                  <p className="text-secondary text-[14px] sm:text-[18px] font-semibold px-4">
                    {isArabic 
                      ? `يرجى إضافة صور المعمارية في المجلد: assets/architecture/${serviceId}/` 
                      : `Please add architecture images in: assets/architecture/${serviceId}/`}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArchitectureModal;
