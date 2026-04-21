import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Lightbox from "./Lightbox";

interface ImageItem {
  src: string;
  title?: string;
  id: string | number;
}

interface ImageGridProps {
  images: ImageItem[];
  columns?: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => openLightbox(index)}
            className="bg-tertiary rounded-xl shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-zoom-in group"
          >
            <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
              <img
                src={img.src}
                alt={img.title || "Project Screenshot"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 p-2 rounded-full backdrop-blur-sm">
                  🔍
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        isOpen={selectedIndex !== null}
        onClose={closeLightbox}
        images={images}
        currentIndex={selectedIndex || 0}
        onNext={showNext}
        onPrev={showPrev}
      />
    </>
  );
};

export default ImageGrid;
