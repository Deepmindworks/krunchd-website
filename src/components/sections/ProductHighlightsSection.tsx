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
    color: "from-[#C8A951]/10 to-[#C8A951]/5",
  },
  {
    slug: "cocoa-power-bites",
    name: "Cocoa Power Bites",
    tagline: "Dark cocoa meets real nuts. Indulgence without the regret.",
    benefits: ["18g Protein", "Raw Cacao", "Dates Sweetened"],
    color: "from-[#8B6914]/10 to-[#8B6914]/5",
  },
  {
    slug: "seeds-trail-mix",
    name: "Seeds & Trail Mix",
    tagline: "Pumpkin, sunflower, chia, flax. A powerhouse in every handful.",
    benefits: ["15g Protein", "Omega-3 Rich", "6 Seed Blend"],
    color: "from-[#C8A951]/10 to-[#C8A951]/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ProductHighlightsSection() {
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
            Our lineup
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
            Built Different. Tastes Better.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#666666]">
            Every product is designed with one rule: if it doesn&apos;t make you
            stronger, it doesn&apos;t make the cut.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#FAFAF8] transition-all duration-300 hover:border-[#C8A951]/30 hover:shadow-xl"
            >
              {/* Image Placeholder */}
              <div
                className={`flex h-56 items-center justify-center bg-gradient-to-br ${product.color}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/60 font-display text-3xl font-extrabold text-[#C8A951]">
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

                <div className="mt-6">
                  <Button
                    variant="outline-gold"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href={`/products/${product.slug}`}>
                      View Product
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button variant="default" size="lg" asChild>
            <Link href="/products">
              See All Products
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
