"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    slug: "almond-crunch",
    name: "Almond Crunch",
    tagline: "The OG. Roasted almonds, a touch of honey, zero nonsense.",
    benefits: ["22g Protein", "No Refined Sugar", "Whole Almonds"],
    ingredients: "Almonds, Honey, Coconut Oil, Sea Salt",
  },
  {
    slug: "cocoa-power-bites",
    name: "Cocoa Power Bites",
    tagline: "Dark cocoa meets real nuts. Indulgence without the regret.",
    benefits: ["18g Protein", "Raw Cacao", "Dates Sweetened"],
    ingredients: "Almonds, Dates, Raw Cacao, Coconut Oil, Sea Salt",
  },
  {
    slug: "seeds-trail-mix",
    name: "Seeds & Trail Mix",
    tagline: "Pumpkin, sunflower, chia, flax. A powerhouse in every handful.",
    benefits: ["15g Protein", "Omega-3 Rich", "6 Seed Blend"],
    ingredients: "Pumpkin Seeds, Sunflower Seeds, Chia, Flax, Almonds, Honey",
  },
  {
    slug: "peanut-power-bar",
    name: "Peanut Power Bar",
    tagline: "Dense. Crunchy. Built for those who move.",
    benefits: ["24g Protein", "Whole Peanuts", "Oat-Based"],
    ingredients: "Peanuts, Oats, Honey, Dates, Coconut Oil",
  },
  {
    slug: "classic-granola",
    name: "Classic Granola",
    tagline: "Breakfast or snack. Rolled oats, nuts, seeds — done right.",
    benefits: ["12g Protein", "High Fiber", "No Added Sugar"],
    ingredients: "Rolled Oats, Almonds, Pumpkin Seeds, Coconut, Honey",
  },
  {
    slug: "spiced-nut-mix",
    name: "Spiced Nut Mix",
    tagline: "Indian spices, premium nuts. Bold flavor, clean profile.",
    benefits: ["20g Protein", "Turmeric & Pepper", "6 Nut Blend"],
    ingredients: "Cashews, Almonds, Peanuts, Turmeric, Black Pepper, Sea Salt",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAF8] bg-grain pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Our products
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl md:text-6xl">
              Fuel That Respects You.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#666666]">
              Every product is built on the same principle: real ingredients,
              real nutrition, total transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product) => (
              <motion.div
                key={product.slug}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#FAFAF8] transition-all duration-300 hover:border-[#C8A951]/30 hover:shadow-xl"
              >
                {/* Image placeholder */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#C8A951]/10 to-[#C8A951]/5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/60 font-display text-2xl font-extrabold text-[#C8A951]">
                    K
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#0A0A0A]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                    {product.tagline}
                  </p>

                  {/* Benefits */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-[#C8A951]/10 px-3 py-1 text-xs font-medium text-[#8B6914]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Ingredients preview */}
                  <p className="mt-4 text-xs text-[#999999]">
                    <span className="font-semibold text-[#666666]">
                      Ingredients:{" "}
                    </span>
                    {product.ingredients}
                  </p>

                  <div className="mt-6">
                    <Button
                      variant="outline-gold"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link href={`/products/${product.slug}`}>
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Can&apos;t Decide?{" "}
              <span className="text-gradient-gold">Start Here.</span>
            </h2>
            <p className="mt-4 text-[#999999]">
              Our Almond Crunch is where most people begin. One pack, and
              you&apos;ll understand why we exist.
            </p>
            <div className="mt-8">
              <Button variant="gold" size="lg" asChild>
                <Link href="/products/almond-crunch">
                  Try Almond Crunch
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
