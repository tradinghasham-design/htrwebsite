"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    badge: "AI & Machine Learning",
    title: "Unlock the Power of AI",
    titleHighlight: "with Us",
    subtitle: "Transform your business with cutting-edge AI solutions tailored for growth and innovation.",
    cta: "Learn More",
    image: "/home1.webp",
    stats: [
      { value: "50+", label: "AI Projects" },
      { value: "99%", label: "Accuracy" },
    ],
  },
  {
    badge: "Web Development",
    title: "Build Modern Websites",
    titleHighlight: "That Scale",
    subtitle: "Fast, responsive & SEO-optimized websites using React, Next.js and Node.js.",
    cta: "Get Started",
    image: "/home2.jpg",
    stats: [
      { value: "200+", label: "Websites" },
      { value: "100%", label: "Responsive" },
    ],
  },
  {
    badge: "Mobile Applications",
    title: "iOS & Android Apps",
    titleHighlight: "Done Right",
    subtitle: "Beautiful, high-performance mobile apps built with React Native for seamless UX.",
    cta: "Explore Now",
    image: "/home1.webp",
    stats: [
      { value: "120+", label: "Apps Built" },
      { value: "4.9★", label: "Rating" },
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (i: number) => setCurrent(i);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100vh-88px)] min-h-[700px] overflow-hidden bg-[#0a1f3d]">

      {/* ═══ BACKGROUND IMAGE ═══ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-right"
            priority
            quality={95}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═══ MULTI-LAYER OVERLAYS (Premium Depth) ═══ */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3d] via-[#0a1f3d]/92 to-[#0a1f3d]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/70 via-transparent to-[#0a1f3d]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,transparent_20%,rgba(10,31,61,0.6)_80%)]" />

      {/* ═══ DECORATIVE ELEMENTS ═══ */}

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-16 flex items-center">
        <div className="max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >

              {/* ═══ BADGE ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-sm text-white font-medium tracking-wide">
                  {slide.badge}
                </span>
              </motion.div>

              {/* ═══ HEADING - Bright + Gradient Highlight ═══ */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
              >
                {slide.title}{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {slide.titleHighlight}
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  />
                </span>
              </motion.h1>

              {/* ═══ SUBTITLE ═══ */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-2xl leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              {/* ═══ QUICK FEATURES ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10"
              >
                {["Free Consultation", "24/7 Support", "100% Satisfaction"].map(
                  (feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-blue-100/90 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </motion.div>

              {/* ═══ CTA BUTTONS ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#4a90e2] hover:bg-[#3a7bc8] text-white rounded-lg font-semibold text-base transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {slide.cta}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </a>

                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-white/30 hover:border-white/70 text-white rounded-lg font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="w-10 h-10 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                    <Play size={14} className="ml-0.5" fill="white" />
                  </span>
                  View Our Work
                </a>
              </motion.div>

              {/* ═══ MINI STATS (Bottom of Content) ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-8 pt-8 border-t border-white/15"
              >
                {slide.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm text-blue-200/80 mt-2 uppercase tracking-wider font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* ═══ PREMIUM ARROWS ═══ */}
      <button
        onClick={prevSlide}
        className="group absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/60 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={26} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="group absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/60 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={26} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ═══ PROGRESS DOTS ═══ */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative transition-all duration-500 rounded-full overflow-hidden ${
              index === current
                ? "w-14 h-2.5 bg-white/25"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          >
            {index === current && (
              <motion.span
                key={current}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* ═══ SLIDE COUNTER (Top Right) ═══ */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-10 right-10 z-20 hidden lg:flex items-center gap-3 text-white"
      >
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold leading-none">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-sm text-white/50 font-medium">/ 03</span>
        </div>
        <div className="w-16 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
          <motion.div
            key={current}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute top-0 left-0 h-full bg-white"
          />
        </div>
      </motion.div>

      {/* ═══ VERTICAL SCROLL INDICATOR ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute left-6 lg:left-10 bottom-10 z-20 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/50 font-semibold tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-[2px] h-12 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>

      {/* ═══ BOTTOM FADE ═══ */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />

    </section>
  );
}
