import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../../constants/styles";
import { fadeIn, slideIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";
import useEscapeKey from "../../hooks/useEscapeKey";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10 flex flex-col"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1 flex-1">
      <p className="text-[18px] tracking-wider text-white h-full">{testimonial}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const AddFeedbackCard: React.FC<{ index: number; onClick: () => void }> = ({ index, onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      onClick={onClick}
      className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10 flex flex-col items-center justify-center border-2 border-dashed border-tertiary hover:border-violet-500 cursor-pointer transition-colors group"
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">✍️</div>
      <h3 className="text-white font-bold text-[20px] text-center">
        {t("Share Feedback")}
      </h3>
      <p className="text-secondary text-[14px] text-center mt-4">
        {t("Tell me about our work!")}
      </p>
    </motion.div>
  );
};

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [form, setForm] = useState({
    name: "",
    designation: "",
    company: "",
    testimonial: "",
  });

  useEscapeKey(onClose, isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = config.html.phone.replace(/[^0-9]/g, "");
    const text = isArabic
      ? `مرحباً أيمن، أود إضافة رأي في بورتفوليو الخاص بك:\n\nالاسم: ${form.name}\nالمسمى: ${form.designation}\nالشركة/المشروع: ${form.company}\n\nالرأي:\n${form.testimonial}`
      : `Hello Ayman, I'd like to add a testimonial to your portfolio:\n\nName: ${form.name}\nRole: ${form.designation}\nCompany: ${form.company}\n\nFeedback:\n${form.testimonial}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            variants={slideIn("up", "tween", 0, 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="bg-black-100 max-w-lg w-full rounded-3xl p-8 sm:p-10 relative overflow-y-auto max-h-[90vh]"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 ${isArabic ? "left-4" : "right-4"} text-white bg-black/30 hover:bg-black/60 w-8 h-8 rounded-full flex items-center justify-center transition-all`}
            >
              ✕
            </button>

            <h2 className="text-white font-bold text-[24px] sm:text-[30px] text-start">
              {t("sections.feedbacks.modal.h2")}
            </h2>
            <p className="text-secondary text-[14px] mt-2 mb-8 text-start">
              {t("sections.feedbacks.modal.p")}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { id: "name", type: "input" },
                { id: "designation", type: "input" },
                { id: "company", type: "input" },
                { id: "testimonial", type: "textarea" },
              ].map((field) => (
                <label key={field.id} className="flex flex-col">
                  <span className="text-white font-medium mb-2 text-start">
                    {t(`sections.feedbacks.modal.fields.${field.id}`)}
                  </span>
                  {field.type === "textarea" ? (
                    <textarea
                      required
                      rows={4}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-start"
                    />
                  ) : (
                    <input
                      required
                      type="text"
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-start"
                    />
                  )}
                </label>
              ))}

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-4 hover:bg-tertiary/80 transition-all flex items-center gap-3"
              >
                <span>{t("sections.feedbacks.modal.submit")}</span>
                <span className="text-xl">💬</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Feedbacks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
        <AddFeedbackCard index={testimonials.length} onClick={() => setIsModalOpen(true)} />
      </div>

      <TestimonialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Feedbacks;
