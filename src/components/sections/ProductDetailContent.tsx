"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductDetailContent({ product }: { product: Product }) {
  return (
    <>
      {/* Product Hero */}
      <section className="bg-[#FAFAF8] bg-grain pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-[#C8A951]/15 to-[#C8A951]/5"
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/60 font-display text-6xl font-extrabold text-[#C8A951]">
                K
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-[#999999] transition-colors hover:text-[#0A0A0A]"
              >
                <ArrowLeft size={14} />
                All Products
              </Link>

              <h1 className="mt-4 font-display text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-[#666666]">{product.tagline}</p>
              <p className="mt-6 leading-relaxed text-[#444444]">
                {product.description}
              </p>

              {/* Benefits */}
              <ul className="mt-8 space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A951]/20 text-[#8B6914]">
                      <Check size={12} />
                    </span>
                    <span className="text-sm text-[#444444]">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <Button variant="gold" size="lg">
                  Buy Now
                  <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products">See All Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C8A951]">
              Full transparency
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              What&apos;s Inside. And Why.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-[#E5E5E5] bg-[#FAFAF8] p-6"
              >
                <p className="font-display text-base font-bold text-[#0A0A0A]">
                  {ingredient.name}
                </p>
                <p className="mt-2 text-sm text-[#999999]">
                  {ingredient.purpose}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section className="bg-[#FAFAF8] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl">
              Nutrition Profile
            </h2>
            <p className="mt-2 text-sm text-[#999999]">Per serving</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white"
          >
            {product.nutrition.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  index !== product.nutrition.length - 1
                    ? "border-b border-[#E5E5E5]"
                    : ""
                }`}
              >
                <span className="text-sm font-medium text-[#666666]">
                  {item.label}
                </span>
                <span className="font-display text-sm font-bold text-[#0A0A0A]">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8A951]/10 text-[#C8A951]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-[#0A0A0A]">
              The KRUNCHD Guarantee
            </h3>
            <p className="mt-4 max-w-lg text-[#666666]">
              Every batch is third-party lab tested. Every claim is verified.
              Every ingredient is traceable. If you&apos;re not satisfied,
              we&apos;ll make it right — no questions asked.
            </p>
            <div className="mt-8">
              <Button variant="gold" size="lg">
                Buy Now
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
