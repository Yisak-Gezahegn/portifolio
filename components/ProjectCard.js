"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-soft backdrop-blur md:p-6"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1000}
          height={640}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 md:h-48"
        />
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
          {project.role}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Link
          href={project.githubUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <Github size={16} />
          GitHub
        </Link>
        <Link
          href={project.liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <ArrowUpRight size={16} />
          Live Demo
        </Link>
      </div>
    </motion.article>
  );
}
