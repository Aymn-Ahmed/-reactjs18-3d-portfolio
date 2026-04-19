import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
      {images.map((img, index) => (
        <motion.div
          key={img.id}
          variants={fadeIn("up", "spring", index * 0.15, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-tertiary rounded-xl shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <img
              src={img.src}
              alt={img.title || "Project Screenshot"}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
