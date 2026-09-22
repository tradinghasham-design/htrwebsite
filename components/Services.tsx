"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  Star,
  Clock,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Services" },
  { id: "development", label: "Development" },
  { id: "ai", label: "AI & Data" },
  { id: "design", label: "Design" },
  { id: "cloud", label: "Cloud" },
  { id: "security", label: "Security" },
];

const services = [
  {
    id: "01",
    title: "AI & Machine Learning",
    category: "ai",
    description: "Build intelligent systems that learn, adapt, and improve. From predictive analytics to LLM-powered applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: ["Custom ML Models", "NLP", "Computer Vision"],
    timeline: "6-12 weeks",
    price: "From $5,000",
    rating: 5.0,
    projects: 45,
    slug: "ai-machine-learning",
  },
  {
    id: "02",
    title: "Web Development",
    category: "development",
    description: "Modern, scalable web applications engineered for performance. From marketing sites to complex SaaS platforms.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: ["Next.js", "React", "TypeScript"],
    timeline: "3-8 weeks",
    price: "From $2,000",
    rating: 5.0,
    projects: 68,
    slug: "web-development",
  },
  {
    id: "03",
    title: "Mobile App Development",
    category: "development",
    description: "Native and cross-platform mobile applications designed for performance and scale.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    features: ["iOS", "Android", "React Native"],
    timeline: "6-12 weeks",
    price: "From $4,000",
    rating: 4.9,
    projects: 52,
    slug: "mobile-app-development",
  },
  {
    id: "04",
    title: "UX/UI Design",
    category: "design",
    description: "Research-driven, user-centered design that converts. Every pixel is intentional, every interaction measured.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    features: ["User Research", "Wireframes", "Design Systems"],
    timeline: "3-6 weeks",
    price: "From $1,500",
    rating: 5.0,
    projects: 71,
    slug: "ui-ux-design",
  },
  {
    id: "05",
    title: "Cloud & DevOps",
    category: "cloud",
    description: "Enterprise-grade cloud infrastructure with automated pipelines. Deploy, scale, monitor.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    features: ["AWS", "Kubernetes", "CI/CD"],
    timeline: "4-8 weeks",
    price: "From $3,000",
    rating: 4.9,
    projects: 38,
    slug: "cloud-devops",
  },
  {
    id: "06",
    title: "Data Engineering",
    category: "ai",
    description: "Build data infrastructure that scales. From raw ingestion to refined analytics — every byte accounted for.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: ["ETL Pipelines", "Data Warehousing", "Streaming"],
    timeline: "6-10 weeks",
    price: "From $4,000",
    rating: 4.8,
    projects: 32,
    slug: "data-engineering",
  },
  {
    id: "07",
    title: "Data Analytics",
    category: "ai",
    description: "Turn data into decisions. Beautiful dashboards, real-time reports, analytical models.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: ["BI Dashboards", "Reports", "KPI Tracking"],
    timeline: "4-8 weeks",
    price: "From $2,500",
    rating: 4.9,
    projects: 41,
    slug: "data-analytics",
  },
  {
    id: "08",
    title: "E-Commerce Solutions",
    category: "development",
    description: "Conversion-optimized online stores with secure checkout, smart inventory, and powerful administration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: ["Shopify", "Stripe", "Custom Stores"],
    timeline: "6-10 weeks",
    price: "From $3,500",
    rating: 5.0,
    projects: 55,
    slug: "e-commerce-solutions",
  },
  {
    id: "09",
    title: "Blockchain & Web3",
    category: "development",
    description: "Secure, audited smart contracts and decentralized applications. Future-proof technology.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    features: ["Solidity", "Ethereum", "DeFi"],
    timeline: "8-16 weeks",
    price: "From $6,000",
    rating: 4.9,
    projects: 18,
    slug: "blockchain-web3",
  },
  {
    id: "10",
    title: "Cyber Security",
    category: "security",
    description: "Comprehensive security assessments and 24/7 monitoring. Protect your data, meet compliance.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    features: ["Penetration Testing", "Audits", "Encryption"],
    timeline: "2-6 weeks",
    price: "From $3,000",
    rating: 5.0,
    projects: 28,
    slug: "cyber-security",
  },
  {
    id: "11",
    title: "QA & Testing",
    category: "development",
    description: "Comprehensive quality assurance — manual, automated, performance, and security testing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    features: ["Selenium", "Cypress", "Performance"],
    timeline: "3-8 weeks",
    price: "From $2,000",
    rating: 4.8,
    projects: 44,
    slug: "qa-testing",
  },
  {
    id: "12",
    title: "Custom Software",
    category: "development",
    description: "Bespoke software engineered for your exact requirements. From concept to production.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    features: ["Requirements", "Development", "Integrations"],
    timeline: "8-20 weeks",
    price: "From $5,000",
    rating: 5.0,
    projects: 36,
    slug: "custom-software",
  },
];

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "8+", label: "Countries Served" },
  { value: "5.0", label: "Client Rating" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  let filtered = services;
  if (activeCategory !== "all") {
    filtered = filtered.filter((s) => s.category === activeCategory);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
  }

  return (
    <div className="bg-white">

      {/* HEADER */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-[#0a2540]">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#0a2540] font-medium">Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a2540] leading-[1.05] mb-6 tracking-tight">
              Software Services
              <br />
              <span className="text-slate-400">Engineered for Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              We design, build, and scale software that powers modern businesses.
              From AI platforms to enterprise applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-200"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${
                    activeCategory === cat.id
                      ? "text-[#0a2540] border-[#0a2540]"
                      : "text-slate-500 border-transparent hover:text-[#0a2540]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-[#0a2540] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID WITH IMAGES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
                className="group h-full"
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#0a2540] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">

                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Number overlay */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-md">
                        <span className="text-sm font-bold text-[#0a2540]">
                          {service.id}
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#0a2540]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span>Explore Service</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow">

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#0a2540] mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-sm mb-5 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock size={12} />
                          <span>{service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Star size={12} className="fill-amber-400 text-amber-400" />
                          <span>{service.rating} ({service.projects})</span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm font-bold text-[#0a2540]">
                          {service.price}
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-slate-400 group-hover:text-[#0a2540] group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <div className="text-2xl font-bold text-[#0a2540] mb-3">
                No services found
              </div>
              <p className="text-slate-500 mb-6">
                Try adjusting your search or filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-[#0a2540] text-white rounded-md font-medium hover:bg-[#1a3a5c]"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2540]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Let's build something
                <br />
                that lasts.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-xl leading-relaxed">
                Tell us about your project. We'll respond within 24 hours with
                a plan, timeline, and honest pricing.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a2540] rounded-md font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto lg:w-full"
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-md font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto lg:w-full"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
