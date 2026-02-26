"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Packs Sold" },
  { value: "4.8", label: "Average Rating" },
  { value: "6", label: "Avg Ingredients" },
  { value: "0", label: "Refined Sugar" },
];

export function SocialProofSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
            The numbers
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
            Proof Is in the Pack.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl font-extrabold text-[#0A0A0A] md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[#999999]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
