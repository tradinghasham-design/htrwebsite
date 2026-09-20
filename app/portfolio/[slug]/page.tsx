"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Building2,
  Calendar,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* HERO BANNER */}
      <section className="relative bg-[#1e3a5f] py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/98 via-[#1e3a5f]/90 to-[#1e3a5f]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            {/* Category + Status */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full">
                {project.status}
              </span>
              <span className="text-white/70 text-sm font-medium">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* META BAR */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            <div className="py-6 px-4 text-center">
              <Building2 size={20} className="text-blue-500 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Client
              </div>
              <div className="font-bold text-[#1e3a5f] text-sm md:text-base">
                {project.client}
              </div>
            </div>
            <div className="py-6 px-4 text-center">
              <Calendar size={20} className="text-blue-500 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Year
              </div>
              <div className="font-bold text-[#1e3a5f] text-sm md:text-base">
                {project.year}
              </div>
            </div>
            <div className="py-6 px-4 text-center">
              <Clock size={20} className="text-blue-500 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Duration
              </div>
              <div className="font-bold text-[#1e3a5f] text-sm md:text-base">
                {project.duration}
              </div>
            </div>
            <div className="py-6 px-4 text-center">
              <Code2 size={20} className="text-blue-500 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Category
              </div>
              <div className="font-bold text-[#1e3a5f] text-sm md:text-base">
                {project.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {project.longDescription} This project showcases our expertise in{" "}
              {project.category} and demonstrates our commitment to delivering
              high-quality software solutions for clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                <Target size={24} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                The Challenge
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {project.client} needed a robust {project.category.toLowerCase()}{" "}
                solution to handle high-traffic operations, ensure data security,
                and scale with their growing business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                <Lightbulb size={24} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                Our Solution
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We built a custom solution using {project.tags.join(", ")} — 
                delivering a production-ready platform that exceeded expectations
                in both performance and user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Key Features
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              What makes this project stand out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} className="text-blue-500" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
              <Code2 size={32} className="text-blue-500" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-10">
                Related Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/portfolio/${rp.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs uppercase tracking-wider text-blue-500 font-bold mb-2">
                        {rp.category}
                      </div>
                      <h3 className="font-bold text-[#1e3a5f] group-hover:text-blue-500 transition-colors">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20">
              <Sparkles size={14} className="text-cyan-300" />
              <span className="text-xs font-semibold text-white tracking-widest uppercase">
                Let's Build Together
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Want Something Similar?
            </h2>
            <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-base md:text-lg">
              Let's discuss your project and build something amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}