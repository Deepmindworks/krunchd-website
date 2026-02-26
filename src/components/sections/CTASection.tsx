"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white md:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C8A951]/5 blur-3xl" />
        <div className="absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C8A951]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Ready to Upgrade
            <br />
            <span className="text-gradient-gold">Your Snack Game?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-[#999999]">
            Join thousands who&apos;ve made the switch to snacks that respect
            their body. No subscriptions, no gimmicks—just clean food, delivered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="gold" size="xl" asChild>
            <Link href="/products">
              Shop Now
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button
            variant="outline-gold"
            size="xl"
            asChild
          >
            <Link href="/about">Learn Our Story</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-[#666666]"
        >
          Free shipping on orders above ₹499 &bull; 100% satisfaction guaranteed
        </motion.p>
      </div>
    </section>
  );
}
