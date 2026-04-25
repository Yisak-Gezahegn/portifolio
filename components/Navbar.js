"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-width mt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 shadow-soft backdrop-blur-xl">
          <Link href="#home" className="text-sm font-semibold tracking-wide text-cyan-200">
            Yisak Gezahegn
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-200 transition hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="absolute right-0 top-24 mr-4 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-soft backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm text-slate-100 transition hover:text-cyan-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
