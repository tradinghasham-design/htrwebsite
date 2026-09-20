"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Rocket,
  GraduationCap,
  Coffee,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

export default function CareersPage() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      desc: "We work on cutting-edge tech — AI, cloud, and modern web frameworks.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      desc: "We believe great products are built by great teams working together.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      desc: "Learning budget, courses, conferences — we invest in your growth.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      desc: "Flexible hours, remote options, and a culture that respects your time.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      desc: "Work on projects that serve clients across 8+ countries worldwide.",
    },
    {
      icon: Award,
      title: "Recognition",
      desc: "We celebrate wins, big and small. Your contributions won't go unnoticed.",
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Career Growth", desc: "Clear path to senior roles" },
    { icon: Shield, title: "Health Insurance", desc: "For you and your family" },
    { icon: Zap, title: "Latest Tech", desc: "Modern tools and hardware" },
    { icon: Target, title: "Learning Budget", desc: "Annual allowance for courses" },
  ];

  return (
    <main className="bg-white">

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-5">
              Careers
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-3xl">
              Careers at SoftTech Solutions offer chances to work on AI and software projects. Join us to grow and make an impact.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
              <Link
                href="/"
                className="text-slate-500 hover:text-[#1e3a5f] transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">
                Careers at SoftTech Solutions
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HERO - We're always searching */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1e3a5f] leading-tight mb-6">
                We're always searching for{" "}
                <span className="text-blue-500">amazing people</span> to join our team
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                At SoftTech Solutions, we believe that amazing people make all the
                difference. That's why we're continuously searching for exceptional
                individuals to join our team. If you're driven, talented, and eager
                to contribute to meaningful work, seize this opportunity.
              </p>

              {/* Begin Your Career Button - Links to Jobs */}
              <Link
                href="/careers/latest-jobs"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Begin Your Career
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* RIGHT: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our Team"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>

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
              Why Choose SoftTech?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              We're not just another software company. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-500 flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon
                      size={28}
                      className="text-blue-500 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIFE AT SOFTTECH */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Life at SoftTech"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] leading-tight mb-6">
                Life at <span className="text-blue-500">SoftTech Solutions</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] md:text-base">
                <p>
                  At SoftTech Solutions, we've built a culture where talented people
                  can do their best work. We're a team of passionate developers,
                  designers, and thinkers who love solving challenging problems.
                </p>
                <p>
                  From our office in{" "}
                  <span className="font-semibold text-slate-800">
                    I-9 Industrial Area, Islamabad
                  </span>
                  , we serve clients worldwide. We believe in transparency, open
                  communication, and giving everyone a voice.
                </p>
                <p>
                  Whether you're a fresh graduate or an experienced professional,
                  you'll find a place here to learn, grow, and build a meaningful
                  career.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "10+", label: "Team Members" },
                  { value: "8+", label: "Countries" },
                  { value: "120+", label: "Projects" },
                  { value: "5★", label: "Rating" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="text-2xl font-bold text-[#1e3a5f]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PERKS & BENEFITS */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e3a5f] mb-4">
              Perks & Benefits
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              We take care of our people, so they can take care of our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon size={26} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm md:text-base">
                    {b.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
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
                Don't See Your Role?
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              We're Always Looking for Talent
            </h2>
            <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-base md:text-lg">
              Send us your resume and tell us how you'd like to contribute to our
              mission.
            </p>
            <a
              href="mailto:careers@softtech.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Send Your Resume
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}