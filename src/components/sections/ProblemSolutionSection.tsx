"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Snack labels full of ingredients you can't pronounce",
  '"Healthy" bars loaded with refined sugar and seed oils',
  "Protein claims backed by cheap fillers",
  "Marketing that hides more than it reveals",
];

const solutions = [
  "Every ingredient is real, whole, and visible",
  "Sweetened with dates and honey — nothing refined",
  "Protein from actual nuts, seeds, and whole grains",
  "Full transparency — what you see is what you eat",
];

export function ProblemSolutionSection() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
            The reality check
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
            The Snack Industry Has a Problem.
            <br />
            <span className="text-gradient-gold">We&apos;re the Fix.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-red-100 bg-red-50/50 p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-bold text-[#0A0A0A]">
              The Problem
            </h3>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <X size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#444444]">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#C8A951]/20 bg-[#C8A951]/5 p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-bold text-[#0A0A0A]">
              The KRUNCHD Way
            </h3>
            <ul className="mt-6 space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8A951]/20 text-[#8B6914]">
                    <Check size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#444444]">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
