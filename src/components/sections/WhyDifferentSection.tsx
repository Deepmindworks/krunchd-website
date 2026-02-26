"use client";

import { motion } from "framer-motion";
import { Flame, Scale, PackageOpen, Heart } from "lucide-react";

const differentiators = [
  {
    icon: PackageOpen,
    title: "What You See Is What You Eat",
    description:
      "Flip the pack. You'll recognize every single ingredient. We don't hide behind \"natural flavors\" or proprietary blends.",
  },
  {
    icon: Scale,
    title: "Macro-Balanced By Design",
    description:
      "Every product is formulated for optimal protein, fiber, and healthy fats. Not an accident — an engineering choice.",
  },
  {
    icon: Flame,
    title: "Small-Batch Roasted",
    description:
      "We roast in small batches to preserve nutrients and maximize flavor. Mass production kills both — we refuse to go there.",
  },
  {
    icon: Heart,
    title: "Built on Obsession",
    description:
      "We test dozens of iterations before a single product ships. If it's not something we'd eat daily, it doesn't exist.",
  },
];

export function WhyDifferentSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
            The difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Why KRUNCHD Hits Different.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#999999]">
            We didn&apos;t build another snack brand. We built what was missing.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-[#1A1A1A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#C8A951]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A951]/10 text-[#C8A951]">
                <item.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#999999]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
