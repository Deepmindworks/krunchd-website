"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAFAF8] bg-grain">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#C8A951]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#C8A951]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C8A951]/30 bg-[#C8A951]/10 px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-[#C8A951]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6914]">
            Premium Healthy Snacks
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Snacks That
          <br />
          <span className="text-gradient-gold">Actually Deserve</span>
          <br />
          Your Body.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#666666] md:text-xl"
        >
          Made with real ingredients you can see and pronounce. No refined sugar,
          no seed oils, no BS. Just clean, high-protein fuel for people who
          give a damn.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="gold" size="xl" asChild>
            <Link href="/products" className="gap-2">
              Shop Now
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="/why-krunchd">See What&apos;s Inside</Link>
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-sm font-medium text-[#999999]"
        >
          Clean Label &bull; High Protein &bull; Zero Junk &bull; Made in India
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={24} className="text-[#C8A951]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
