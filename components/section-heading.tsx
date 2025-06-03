"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <motion.div
          className="h-1 w-20 bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
