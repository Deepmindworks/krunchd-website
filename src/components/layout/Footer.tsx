"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  brand: [
    { href: "/about", label: "About Us" },
    { href: "/why-krunchd", label: "Why KRUNCHD" },
    { href: "/products", label: "Products" },
  ],
  support: [
    { href: "#", label: "Contact" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Shipping" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Refund Policy" },
  ],
};

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="KRUNCHD"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover brightness-110"
              />
              <span className="font-display text-lg font-extrabold tracking-tight">
                KRUNCHD
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#999999]">
              Clean. Crunchy. Complete. Premium snacks made with real
              ingredients, crafted for people who refuse to compromise.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#333333] text-[#999999] transition-all duration-300 hover:border-[#C8A951] hover:text-[#C8A951]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C8A951]">
              Brand
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.brand.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#999999] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C8A951]">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#999999] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C8A951]">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-[#999999]">
              First access to new flavors, drops, and honest updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-[#333333] bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-[#666666] focus:border-[#C8A951] focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8A951] text-[#0A0A0A] transition-colors hover:bg-[#D4BA6A]"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1A1A1A] pt-8 md:flex-row">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} KRUNCHD. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-[#666666] transition-colors hover:text-[#999999]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
