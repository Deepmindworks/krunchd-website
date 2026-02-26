"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun M.",
    role: "Founder, Tech Startup",
    content:
      "I've tried every \"healthy\" snack out there. KRUNCHD is the first one where I actually trust the label. The Almond Crunch is my daily 4pm ritual.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Fitness Coach",
    content:
      "Finally, a snack I can recommend to my clients without caveats. Clean ingredients, real protein, and it actually fills you up. This is what the industry should look like.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    role: "Product Designer",
    content:
      "The transparency is refreshing. No buzzwords, no gimmicks. Just honest food that happens to taste incredible. My entire team is hooked.",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            Real people, real words
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A0A0A] sm:text-4xl md:text-5xl">
            Don&apos;t Take Our Word for It.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-[#E5E5E5] bg-white p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#C8A951] text-[#C8A951]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 text-sm leading-relaxed text-[#444444]">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A951]/10 font-display text-sm font-bold text-[#C8A951]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0A0A0A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#999999]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
