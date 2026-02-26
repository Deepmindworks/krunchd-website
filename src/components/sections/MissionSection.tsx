"use client";

import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="bg-white py-24 md:py-32">
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
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <p className="font-display text-3xl font-extrabold leading-tight text-[#0A0A0A] sm:text-4xl md:text-5xl">
            &ldquo;We exist to prove that what&apos;s good for you can{" "}
            <span className="text-gradient-gold">actually be good</span>
            &mdash;in every sense of the word.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <p className="text-lg leading-relaxed text-[#666666]">
            KRUNCHD was born from frustration—with labels that lie, with
            &ldquo;health food&rdquo; that isn&apos;t healthy, with an industry
            that profits from confusion. We&apos;re here to set a new standard.
            One ingredient at a time.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-12 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"
        />
      </div>
    </section>
  );
}
