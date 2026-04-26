"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  Facebook,
  GraduationCap,
  Send,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects, skills } from "@/lib/data";

const headline = "Hello, I am Yisak Gezahegn Mamo.";
const skillEmojiByCategory = {
  "Frontend Development": "🎨",
  "Backend & Server": "⚙️",
  "Database Architecture": "🗄️",
  "Tools & Deployment": "🚀"
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2
  });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yisak Gezahegn Mamo",
    jobTitle: "Full Stack Software Engineer",
    url: "https://yisak-gezahegn.vercel.app",
    image: "https://yisak-gezahegn.vercel.app/images/yisak-hero-visual.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adama",
      addressCountry: "Ethiopia"
    },
    sameAs: [
      "https://github.com/Yisak-Gezahegn",
      "https://t.me/Yisak_gezahegn",
      "https://m.facebook.com/YisakGezahegn/"
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-cyan-400" style={{ scaleX: progressScaleX }} />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="pointer-events-none fixed left-4 top-28 z-0 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl md:h-28 md:w-28"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-10 right-6 z-0 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl md:h-28 md:w-28"
      />
      <Navbar />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <section id="home" className="container-width flex min-h-screen items-center section-padding">
          <div className="grid w-full items-center gap-10 md:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200"
              >
                <MapPin size={14} />
                Adama, Ethiopia (Available for Remote Work)
              </motion.p>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {headline.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * index, duration: 0.28 }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-5 text-xl font-semibold text-cyan-200 md:text-2xl"
              >
                Full Stack Software Engineer
              </motion.h2>
              <p className="mt-2 text-sm font-medium text-slate-200">
                Full Stack Developer &amp; Computer Scientist
              </p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base"
              >
                Bridging robust technical architecture with strategic management principles to
                build scalable web applications.
              </motion.p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                Aspiring Frontend Developer with a strong technical foundation in Computer Science,
                focused on building scalable products that combine clean architecture with real
                business value.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/cv"
                  className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View Interactive CV
                </Link>
                <Link
                  href="/Yisak_Gezahegn_CV.pdf"
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Download Classic PDF
                </Link>
                <Link
                  href="#projects"
                  className="rounded-xl border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.4 }}
                className="mt-5"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  Connect With Me
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="https://t.me/Yisak_gezahegn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                  >
                    <Send size={14} />
                    Telegram
                  </Link>
                  <Link
                    href="https://m.facebook.com/YisakGezahegn/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                  >
                    <Facebook size={14} />
                    Facebook
                  </Link>
                  <Link
                    href="https://github.com/Yisak-Gezahegn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                  >
                    <Github size={14} />
                    GitHub
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, rotate: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-cyan-500/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 backdrop-blur">
                <Image
                  src="/images/yisak-hero-visual.svg"
                  alt="Yisak Gezahegn profile photo"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[1.5rem] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">About Me</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3 text-cyan-200">
                <BriefcaseBusiness size={20} />
                <h3 className="text-lg font-semibold">Professional Summary</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                I am a Full Stack Developer currently pursuing a dual focus in Computer Science
                and Management at Haramaya University. This unique combination allows me to write
                clean, efficient code while understanding the broader business objectives behind
                every software project. I specialize in building dynamic web applications and
                scalable database architectures, transitioning seamlessly from local development
                environments to live server deployments. I am deeply passionate about continuous
                learning-currently expanding my expertise in React and modern JavaScript
                frameworks-and I am actively seeking remote opportunities to apply my technical
                skills to complex, real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3 text-cyan-200">
                <GraduationCap size={20} />
                <h3 className="text-lg font-semibold">Academic Advantage</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                As a Computer Science &amp; Management Student at Haramaya University, I combine
                software engineering depth with strategic business thinking to ship products that
                are technically solid and aligned with measurable impact.
              </p>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Technical Arsenal</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: categoryIndex * 0.08, duration: 0.35 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-200">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skillList.map((skill) => (
                      <motion.p
                        key={skill}
                        whileHover={{ y: -4 }}
                        className="rounded-xl border border-white/10 bg-slate-800/80 px-3 py-2 text-sm text-slate-200"
                      >
                        <span className="mr-2" aria-hidden>
                          {skillEmojiByCategory[category] ?? "✨"}
                        </span>
                        {skill}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Featured Projects</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="education" className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur md:p-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Education</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-200 md:text-base">
              <p>
                <span className="font-semibold text-cyan-200">Degree:</span> Bachelor of Science
                in Computer Science &amp; Management (Dual Studies)
              </p>
              <p>
                <span className="font-semibold text-cyan-200">Institution:</span> Haramaya
                University
              </p>
              <p>
                <span className="font-semibold text-cyan-200">Relevant Coursework:</span> Software
                Engineering Principles, Computer Architecture, Turing Machines, Database Management
                Systems.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="container-width pb-10 md:pb-14">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">Experience Snapshot</h3>
              <div className="mt-4 rounded-xl border border-white/10 bg-slate-800/70 p-4">
                <p className="text-sm font-semibold text-cyan-200">Junior Frontend Developer</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">Fauget Studio | 2017-2018</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
                  <li>Created more than five real web projects for client-focused use cases.</li>
                  <li>Participated in collaborative group programming and delivery cycles.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">Languages</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                  <p className="text-sm font-semibold text-cyan-200">English</p>
                  <p className="mt-1 text-sm text-slate-300">Professional working proficiency</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                  <p className="text-sm font-semibold text-cyan-200">Amharic</p>
                  <p className="mt-1 text-sm text-slate-300">Native proficiency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-width pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="grid items-center gap-5 rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur md:grid-cols-[auto_1fr] md:p-6"
          >
            <Image
              src="/images/yisak-hero-visual.svg"
              alt="Gihon Tech company logo"
              width={120}
              height={120}
              className="h-16 w-16 rounded-xl border border-white/10 object-cover md:h-20 md:w-20"
            />
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                <Sparkles size={16} />
                Founder
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white md:text-xl">Gihon Tech</h3>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                I established my own tech company, Gihon, focused on delivering practical,
                scalable, and user-centered digital solutions.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Contact Me</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Let&apos;s discuss how I can contribute to your next project.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      <Phone size={16} />
                      Phone
                    </p>
                    <div className="space-y-1 text-sm text-slate-200">
                      <a href="tel:+251973391342" className="block transition hover:text-cyan-300">
                        +251 973 391 342
                      </a>
                      <a href="tel:+251952365136" className="block transition hover:text-cyan-300">
                        +251 952 365 136
                      </a>
                      <a href="tel:+251799489650" className="block transition hover:text-cyan-300">
                        +251 799 489 650
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      <Mail size={16} />
                      Email
                    </p>
                    <a
                      href="mailto:yisakgezahegnmamo@gmail.com"
                      className="text-sm text-slate-200 transition hover:text-cyan-300"
                    >
                        yisakgezahegnmamo@gmail.com
                    </a>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      <MapPin size={16} />
                      Location
                    </p>
                    <p className="text-sm text-slate-200">Adama, Ethiopia</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="mb-3 text-sm font-semibold text-cyan-200">Connect With Me</p>
                    <div className="flex flex-wrap gap-2">
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="https://t.me/Yisak_gezahegn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
                      >
                        <Send size={14} />
                        Telegram
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="https://m.facebook.com/YisakGezahegn/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
                      >
                        <Facebook size={14} />
                        Facebook
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="https://github.com/Yisak-Gezahegn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
                      >
                        <Github size={14} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/mojvobpr" method="POST" className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
                />
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
                />
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Your message"
                  className="w-full rounded-xl border border-white/15 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.96 }}
                  className="w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:w-auto"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-white/10 py-8">
          <div className="container-width flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <p className="text-base font-semibold text-slate-100">Yisak Gezahegn</p>
              <p className="text-sm text-slate-400">
                Full Stack Software Engineer | Adama, Ethiopia
              </p>
            </div>
            <div className="flex items-center gap-5 text-sm text-slate-300">
              <Link href="#home" className="transition hover:text-cyan-300">
                Home
              </Link>
              <Link href="#projects" className="transition hover:text-cyan-300">
                Projects
              </Link>
              <Link href="#contact" className="transition hover:text-cyan-300">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://t.me/Yisak_gezahegn"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                aria-label="Telegram"
              >
                <Send size={16} />
              </Link>
              <Link
                href="https://m.facebook.com/YisakGezahegn/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://github.com/Yisak-Gezahegn"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </motion.main>

      {showBackToTop ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-400/40 bg-slate-900/90 p-3 text-cyan-200 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-slate-800"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </div>
  );
}
