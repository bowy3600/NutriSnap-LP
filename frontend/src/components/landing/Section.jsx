import React from "react";
import { motion } from "framer-motion";

export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  testId,
  centered = false,
}) => {
  return (
    <section
      id={id}
      data-testid={testId}
      className={`relative py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
          {title && (
            <h2 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
};
