"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Leaf, Eye } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description:
      "Every ingredient is real, whole, and recognizable. Nothing artificial, nothing hidden.",
  },
  {
    icon: Zap,
    title: "High Protein",
    description:
      "Packed with quality protein from real nuts, seeds, and whole grains. Fuel that works.",
  },
  {
    icon: Shield,
    title: "Zero Junk",
    description:
      "No refined sugar. No seed oils. No preservatives. No compromise. Period.",
  },
  {
    icon: Eye,
    title: "Radically Honest",
    description:
      "We show you exactly what goes in. No fine print, no clever marketing tricks.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ValuePropSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
            What we stand for
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
            Four Promises. No Exceptions.
          </h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group rounded-2xl border border-[#E5E5E5] bg-[#FAFAF8] p-8 transition-all duration-300 hover:border-[#C8A951]/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A951]/10 text-[#C8A951] transition-colors duration-300 group-hover:bg-[#C8A951] group-hover:text-white">
                <value.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-[#0A0A0A]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
