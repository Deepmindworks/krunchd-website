"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Ingredient Integrity",
    description:
      "We will never use an ingredient we wouldn't eat ourselves. Every component is sourced, tested, and chosen with intention.",
  },
  {
    title: "Radical Transparency",
    description:
      "No fine print, no \"natural flavors\" loophole, no clever wordplay. You see everything that goes in.",
  },
  {
    title: "Function Over Hype",
    description:
      "We don't chase trends. We formulate for nutrition density, bioavailability, and real-world performance.",
  },
  {
    title: "Respect for the Consumer",
    description:
      "We assume you're smart enough to read a label and make informed choices. We built KRUNCHD for people like that.",
  },
];

export default function AboutPage() {
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
              Our story
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl md:text-6xl">
              Built from Frustration.
              <br />
              <span className="text-gradient-gold">Driven by Standards.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg leading-relaxed text-[#444444]"
          >
            <p>
              KRUNCHD started with a simple question:{" "}
              <strong className="text-[#0A0A0A]">
                Why is it so hard to find a snack that&apos;s actually clean?
              </strong>
            </p>
            <p>
              We&apos;d flip pack after pack in grocery stores, reading labels
              that looked more like chemistry experiments than food.
              &ldquo;Healthy&rdquo; bars packed with maltodextrin. Protein
              snacks held together by seed oils. Trail mixes drowning in refined
              sugar.
            </p>
            <p>
              We didn&apos;t just want better marketing — we wanted{" "}
              <strong className="text-[#0A0A0A]">better food</strong>. So we
              built it. From the ground up. Ingredient by ingredient. Batch by
              batch.
            </p>
            <p>
              KRUNCHD is what happens when you refuse to accept &ldquo;good
              enough&rdquo; in an industry that profits from confusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0A0A0A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Our mission
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
              To make clean nutrition the{" "}
              <span className="text-gradient-gold">default</span>, not the
              exception.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#999999]">
              We believe that every person deserves access to food that&apos;s
              honest about what it contains. Not as a luxury. As a baseline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              What guides us
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              Our Non-Negotiables.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[#E5E5E5] bg-white p-8"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8A951]/10 font-display text-sm font-bold text-[#C8A951]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0A0A0A]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              The vision
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              Where We&apos;re Going.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#666666]">
              We&apos;re building more than a snack brand. We&apos;re building a
              new category of food companies — ones that lead with honesty, build
              with integrity, and prove that profit and principles aren&apos;t
              mutually exclusive.
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
