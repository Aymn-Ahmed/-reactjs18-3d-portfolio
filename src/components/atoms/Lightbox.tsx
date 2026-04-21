import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import useEscapeKey from "../../hooks/useEscapeKey";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title?: string; id?: string | number }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEscapeKey(onClose, isOpen);

  // Set up touch/arrow key navigation separately or in useEffect if needed
  // For standard consistency, we keep the original effect for arrows
  React.useEffect(() => {
    const handleNavigation = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") isArabic ? onPrev() : onNext();
      if (e.key === "ArrowLeft") isArabic ? onNext() : onPrev();
    };

    window.addEventListener("keydown", handleNavigation);
    if (isOpen) document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleNavigation);
      document.body.style.overflow = "";
    };
  }, [isOpen, onNext, onPrev, isArabic]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-10"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-10 sm:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all z-[1001] text-2xl backdrop-blur-sm"
            title={t("lightbox.close")}
          >
            ✕
          </button>

          {/* Navigation - Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className={`absolute bottom-10 sm:bottom-auto ${isArabic ? 'sm:right-10' : 'sm:left-10'} left-1/4 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center transition-all z-[1001] text-3xl backdrop-blur-sm`}
            >
              {isArabic ? "→" : "←"}
            </button>
          )}

          {/* Navigation - Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className={`absolute bottom-10 sm:bottom-auto ${isArabic ? 'sm:left-10' : 'sm:right-10'} right-1/4 sm:right-auto transform translate-x-1/2 sm:translate-x-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center transition-all z-[1001] text-3xl backdrop-blur-sm`}
            >
              {isArabic ? "←" : "→"}
            </button>
          )}

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative group max-h-[80vh] w-full flex items-center justify-center">
              <motion.img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.title || "Image"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl selection:bg-none"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-6 text-center space-y-2">
              {currentImage.title && (
                <h3 className="text-white font-medium text-lg">{currentImage.title}</h3>
              )}
              <p className="text-white/50 text-sm font-light tracking-widest">
                {currentIndex + 1} {t("lightbox.of")} {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
