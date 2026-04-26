"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const skills = [
  { label: "Frontend Development", level: 90 },
  { label: "Backend Development", level: 82 },
  { label: "Database Design", level: 85 },
  { label: "Deployment & Dev Tools", level: 78 }
];

const timeline = [
  {
    period: "2017 - 2018",
    title: "Junior Frontend Developer",
    organization: "Fauget Studio",
    details: "Delivered client websites and collaborated on team-based project delivery."
  },
  {
    period: "2023 - Present",
    title: "BSc Student (Computer Science & Management)",
    organization: "Haramaya University",
    details: "Building full-stack engineering depth with a strong business and strategy mindset."
  },
  {
    period: "Present",
    title: "Founder",
    organization: "Gihon Tech",
    details: "Leading practical, user-centered product development and digital solutions."
  }
];

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link href="/" className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:text-cyan-300">
            Back to Portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            <Download size={16} />
            Export as PDF
          </button>
        </div>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/85 shadow-soft">
          <div className="grid gap-8 border-b border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-indigo-500/15 p-8 md:grid-cols-[220px_1fr]">
            <div className="mx-auto w-44 overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-800 md:mx-0">
              <Image
                src="/images/yisak-hero-visual.svg"
                alt="Yisak Gezahegn profile photo"
                width={500}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">Yisak Gezahegn Mamo</h1>
              <p className="mt-2 text-base font-medium text-cyan-200 md:text-lg">
                Full Stack Software Engineer
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                I build scalable, user-centered web products by combining software engineering
                fundamentals with strategic business thinking.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200">
                <span className="rounded-full border border-white/15 px-3 py-1">Adama, Ethiopia</span>
                <span className="rounded-full border border-white/15 px-3 py-1">Remote Ready</span>
                <a
                  href="mailto:yisakgezahegnmamo@gmail.com"
                  className="rounded-full border border-white/15 px-3 py-1 hover:text-cyan-300"
                >
                  yisakgezahegnmamo@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-white">Core Skills</h2>
              <div className="mt-4 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{skill.label}</span>
                      <span className="text-cyan-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Experience Timeline</h2>
              <div className="mt-4 space-y-4 border-l border-white/10 pl-4">
                {timeline.map((item) => (
                  <div key={`${item.title}-${item.period}`} className="relative rounded-xl border border-white/10 bg-slate-800/70 p-4">
                    <span className="absolute -left-[22px] top-5 h-3 w-3 rounded-full bg-cyan-300" />
                    <p className="text-xs uppercase tracking-wide text-cyan-200">{item.period}</p>
                    <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300">{item.organization}</p>
                    <p className="mt-2 text-sm text-slate-200">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-8">
            <h2 className="text-lg font-semibold text-white">Projects & Links</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <a
                href="https://ethiofood.infinityfree.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-slate-800/70 p-4 transition hover:border-cyan-300/40"
              >
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                  Ethio Food <ExternalLink size={14} />
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Food-ordering platform with responsive UI and robust backend integration.
                </p>
              </a>
              <a
                href="https://hukhcff.infinityfree.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-slate-800/70 p-4 transition hover:border-cyan-300/40"
              >
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                  KHCFF Website <ExternalLink size={14} />
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Dynamic organization website with database-driven content and mobile-first layout.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
