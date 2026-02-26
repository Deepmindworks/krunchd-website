"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Microscope,
  Wheat,
  Factory,
} from "lucide-react";

const comparisons = [
  {
    label: "Refined Sugar",
    them: true,
    us: false,
  },
  {
    label: "Seed Oils (Canola, Soy)",
    them: true,
    us: false,
  },
  {
    label: "Artificial Preservatives",
    them: true,
    us: false,
  },
  {
    label: "\"Natural Flavors\" (Hidden)",
    them: true,
    us: false,
  },
  {
    label: "Transparent Label",
    them: false,
    us: true,
  },
  {
    label: "Whole Food Ingredients",
    them: false,
    us: true,
  },
  {
    label: "Small Batch Production",
    them: false,
    us: true,
  },
  {
    label: "Third-Party Tested",
    them: false,
    us: true,
  },
];

const pillars = [
  {
    icon: Wheat,
    title: "Ingredient Sourcing",
    description:
      "Every nut, seed, and sweetener is traced back to its origin. We visit farms, test samples, and reject anything that doesn't meet our standard.",
  },
  {
    icon: Factory,
    title: "Small Batch Production",
    description:
      "We roast in controlled small batches. Slower, more expensive — but it preserves nutrients and develops deeper, more complex flavors.",
  },
  {
    icon: Microscope,
    title: "Lab-Verified Claims",
    description:
      "Our nutrition claims aren't estimates. Every batch is tested by an independent lab. What's on the label is what's in the pack.",
  },
  {
    icon: ShieldCheck,
    title: "The No-Junk Guarantee",
    description:
      "Zero refined sugar. Zero seed oils. Zero preservatives. Zero fillers. If it doesn't belong in your body, it doesn't belong in our products.",
  },
];

export default function WhyKrunchdPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAF8] bg-grain pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Why KRUNCHD
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl md:text-6xl">
              Not Another Snack Brand.
              <br />
              <span className="text-gradient-gold">A New Standard.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[#666666]">
              We built KRUNCHD because the &ldquo;healthy snack&rdquo; industry
              needed a reality check. Here&apos;s what makes us fundamentally
              different.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              Them vs. Us. Straight Up.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 overflow-hidden rounded-2xl border border-[#E5E5E5]"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#0A0A0A] text-white">
              <div className="p-4 text-sm font-semibold" />
              <div className="p-4 text-center text-sm font-semibold text-[#999999]">
                Typical &ldquo;Healthy&rdquo; Brands
              </div>
              <div className="p-4 text-center text-sm font-bold text-[#C8A951]">
                KRUNCHD
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"
                }`}
              >
                <div className="flex items-center p-4 text-sm text-[#444444]">
                  {row.label}
                </div>
                <div className="flex items-center justify-center p-4">
                  {row.them ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X size={14} />
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      <X size={14} />
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center p-4">
                  {row.us ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A951]/20 text-[#8B6914]">
                      <Check size={14} />
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A951]/20 text-[#8B6914]">
                      <Check size={14} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#FAFAF8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              How we do it
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              The KRUNCHD Framework.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[#E5E5E5] bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A951]/10 text-[#C8A951]">
                  <pillar.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-[#0A0A0A]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-[#0A0A0A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Full transparency
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              We Show You Everything.
            </h2>
            <p className="mt-6 text-lg text-[#999999]">
              Every product page lists every ingredient, its source, and why
              it&apos;s there. We publish our lab reports. We share our process.
              Because if you can&apos;t trust the label, you can&apos;t trust
              the brand.
            </p>
            <div className="mt-10">
              <Button variant="gold" size="lg" asChild>
                <Link href="/products">
                  See Our Products
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
