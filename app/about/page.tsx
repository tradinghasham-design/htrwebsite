"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Lightbulb,
  Handshake,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const stats = [
  { icon: Users, value: "10+", label: "Team Members" },
  { icon: Award, value: "15+", label: "Projects Done" },
  { icon: TrendingUp, value: "5+", label: "Countries" },
  { icon: Heart, value: "5★", label: "Client Rating" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower startups and growing businesses with innovative, affordable, and scalable software solutions that drive real results.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted global software partner, known for excellence, innovation, and long-term client relationships.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, innovation, and a relentless commitment to delivering quality in every project we take on.",
  },
];

const highlights = [
  "Founded in 2026 with a fresh, modern approach",
  "Serving clients across Pakistan and beyond",
  "Specialized in AI, Web, Mobile & Cloud solutions",
  "100% commitment to quality and on-time delivery",
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: "Modern Technology",
    description: "We use the latest tech stack — Next.js, React, AI, and Cloud.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Every project is unique, and we craft custom solutions that fit your needs.",
  },
  {
    icon: Handshake,
    title: "Client-First Approach",
    description:
      "Your success is our success. We work as your long-term technology partner.",
  },
];

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO / HEADER SECTION */}
      <section className="relative bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-5">
              About Us
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-3xl">
              We're a modern software company from Islamabad, delivering innovative AI-driven solutions for growing businesses worldwide.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
              <Link
                href="/"
                className="text-slate-500 hover:text-[#1e3a5f] transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">About Our Company</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/home2.jpg"
                  alt="Our Team"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* RIGHT: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] leading-tight mb-6">
                Behind every company is an{" "}
                <span className="text-blue-500">interesting story</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] md:text-base">
                <p>
                  <span className="font-semibold text-slate-800">
                    HTR Systems
                  </span>{" "}
                  is a modern{" "}
                  <span className="text-blue-500 font-medium">
                    software development company
                  </span>{" "}
                  based in Islamabad, Pakistan. We help startups and growing
                  businesses turn their ideas into powerful digital products.
                </p>
                <p>
                  Founded in{" "}
                  <span className="font-semibold text-slate-800">2026</span>,
                  we're a fresh, energetic team with a clear mission — to deliver
                  high-quality software solutions using the latest technologies
                  like{" "}
                  <span className="font-semibold text-slate-800">
                    AI, React, Next.js, and Cloud
                  </span>
                  . Despite being new, our team brings years of collective
                  experience and passion to every project.
                </p>
                <p>
                  From our office in{" "}
                  <span className="font-semibold text-slate-800">
                    I-9 Industrial Area, Islamabad
                  </span>
                  , we serve clients across Pakistan and around the world. We
                  believe in building long-term partnerships, not just
                  delivering projects.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700 text-sm md:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-[15px] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-blue-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] mb-4">
              What Drives Us
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              Our mission, vision, and values shape every project we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-500 flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon
                      size={28}
                      className="text-blue-500 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              Here's what makes us different from other software companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1e3a5f] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO & FOUNDER SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] mb-4">
              Meet Our Founder
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              The vision and passion behind HTR Systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center"
          >

            {/* LEFT: IMAGE */}
            <div className="lg:col-span-2 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl opacity-10" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5]">
                  <Image
                    src="/ownerpic.png"
                    alt="CEO & Founder"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="absolute -bottom-4 left-6 bg-blue-500 text-white px-5 py-2.5 rounded-xl shadow-xl">
                  <div className="text-xs uppercase tracking-widest font-semibold opacity-90">
                    CEO & Founder
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TEXT */}
            <div className="lg:col-span-3">

              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">
                Hasham khan
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-blue-500" />
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
                  CEO & Founder
                </span>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] md:text-base mb-8">
                <p>
                  <span className="font-semibold text-slate-800">
                   Hasham khan
                  </span>{" "}
                  is the visionary founder and CEO of{" "}
                  <span className="text-blue-500 font-medium">
                    HTR Systems
                  </span>
                  . With a passion for technology and innovation, he founded the
                  company in{" "}
                  <span className="font-semibold text-slate-800">2026</span> with
                  a mission to help businesses grow through smart software
                  solutions.
                </p>
                <p>
                  With strong expertise in{" "}
                  <span className="font-semibold text-slate-800">
                    AI, full-stack development, and cloud technologies
                  </span>
                  , he leads a talented team dedicated to delivering world-class
                  software products.
                </p>
                <p>
                  His vision is simple: build software that makes a real
                  difference — for businesses, for users, and for the future.
                </p>
              </div>

              <div className="relative pl-6 border-l-4 border-blue-500 mb-8">
                <p className="text-slate-700 italic text-[15px] md:text-base leading-relaxed">
                  "We don't just build software — we build partnerships that help
                  businesses thrive in the digital age."
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-lg bg-slate-100 hover:bg-blue-500 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 font-bold"
                >
                  in
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-lg bg-slate-100 hover:bg-blue-500 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 font-bold"
                >
                  𝕏
                </a>
                <a
                  href="mailto:info@htrsystems.com"
                  aria-label="Email"
                  className="w-11 h-11 rounded-lg bg-slate-100 hover:bg-blue-500 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 text-lg"
                >
                  ✉️
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 md:py-20 bg-[#1e3a5f] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Work With Us?
            </h2>
            <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-base md:text-lg">
              Let's discuss your project and see how we can help your business
              grow.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-bold text-base hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}