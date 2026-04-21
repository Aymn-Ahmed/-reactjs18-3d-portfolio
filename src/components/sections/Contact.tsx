import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useState } from "react";
import { useRef } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    const phoneNumber = config.html.phone.replace(/[^0-9]/g, "");
    const text = isArabic
      ? `مرحباً أيمن،\n\nاسمي: ${form.name}.\nبريدي الإلكتروني: ${form.email}.\n\nالرسالة:\n${form.message}`
      : `Hello Ayman,\n\nMy name is ${form.name}.\nMy email is ${form.email}.\n\nMessage:\n${form.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setForm(INITIAL_STATE);
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <motion.div
        variants={slideIn(isArabic ? "right" : "left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header
          useMotion={false}
          p={t("sections.contact.p")}
          h2={t("sections.contact.h2")}
        />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {["name", "email", "message"].map((input) => {
            const span = t(`sections.contact.form.${input}.span`);
            const placeholder = t(`sections.contact.form.${input}.placeholder`);
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white text-start">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input as keyof typeof INITIAL_STATE]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none text-start"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:bg-tertiary/80 transition-all"
          >
            {loading ? t("sections.contact.form.sending") : t("sections.contact.form.submit")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn(isArabic ? "left" : "right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-[650px] xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
