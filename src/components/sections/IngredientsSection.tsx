"use client";

import { motion } from "framer-motion";

const ingredients = [
  { name: "Whole Almonds", detail: "California-origin, slow-roasted" },
  { name: "Organic Dates", detail: "Natural sweetness, high fiber" },
  { name: "Raw Honey", detail: "Unprocessed, single-origin" },
  { name: "Pumpkin Seeds", detail: "Rich in zinc and magnesium" },
  { name: "Dark Cacao", detail: "72% raw, minimally processed" },
  { name: "Chia Seeds", detail: "Omega-3 dense, whole seeds" },
  { name: "Flax Seeds", detail: "Cold-milled, nutrient-locked" },
  { name: "Coconut Oil", detail: "Cold-pressed, virgin grade" },
];

export function IngredientsSection() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Ingredients philosophy
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
              If You Can&apos;t
              <br />
              Pronounce It,
              <br />
              <span className="text-gradient-gold">We Don&apos;t Use It.</span>
            </h2>
            <p className="mt-6 max-w-md text-[#666666] leading-relaxed">
              Our ingredient list reads like a grocery list, not a chemistry
              textbook. Every component is sourced for quality, tested for
              purity, and chosen with intention.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C8A951]/30 bg-[#C8A951]/5 px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
              <span className="text-sm font-semibold text-[#8B6914]">
                Average: 6 ingredients per product
              </span>
            </div>
          </motion.div>

          {/* Right: Ingredient Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-[#E5E5E5] bg-white p-4 transition-all duration-300 hover:border-[#C8A951]/30 hover:shadow-md"
              >
                <p className="font-display text-sm font-bold text-[#0A0A0A]">
                  {ingredient.name}
                </p>
                <p className="mt-1 text-xs text-[#999999]">
                  {ingredient.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
