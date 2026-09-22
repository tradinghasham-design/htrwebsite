"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ═══════════════════════════════════════════════════════════════════
// SERVICES DATA - 12 Real Production Services
// ═══════════════════════════════════════════════════════════════════

const services = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems that learn, adapt, and improve. From predictive analytics to LLM-powered applications, we deliver AI that transforms operations at scale.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    deliverables: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "LLM Integration",
      "Recommendation Engines",
    ],
    slug: "ai-machine-learning",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, scalable web applications engineered for performance. From marketing sites to complex SaaS platforms — built with Next.js, React, and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    deliverables: [
      "Custom Websites",
      "SaaS Platforms",
      "Progressive Web Apps",
      "API Development",
      "CMS Integration",
      "E-commerce Systems",
    ],
    slug: "web-development",
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for performance and scale. Built for iOS and Android with seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    deliverables: [
      "iOS Native Apps",
      "Android Native Apps",
      "Cross-Platform Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline-First Architecture",
    ],
    slug: "mobile-app-development",
  },
  {
    number: "04",
    title: "UX/UI Design",
    description:
      "Research-driven, user-centered design that converts. Every pixel is intentional, every interaction is measured, every screen is validated.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    deliverables: [
      "User Research & Personas",
      "Wireframes & Prototypes",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
      "Brand Identity",
    ],
    slug: "ui-ux-design",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Enterprise-grade cloud infrastructure with automated pipelines. Deploy, scale, and monitor — with security built into every layer.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    deliverables: [
      "Cloud Migration",
      "CI/CD Pipelines",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "24/7 Monitoring",
      "Cost Optimization",
    ],
    slug: "cloud-devops",
  },
  {
    number: "06",
    title: "Data Engineering",
    description:
      "Build data infrastructure that scales. From raw ingestion to refined analytics — every byte is accounted for.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    deliverables: [
      "ETL/ELT Pipelines",
      "Data Warehousing",
      "Real-time Streaming",
      "Data Quality",
      "Data Lakes",
      "API Integration",
    ],
    slug: "data-engineering",
  },
  {
    number: "07",
    title: "Data Analytics",
    description:
      "Turn data into decisions. Beautiful dashboards, real-time reports, and analytical models that drive measurable business outcomes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    deliverables: [
      "BI Dashboards",
      "Custom Reporting",
      "KPI Tracking",
      "Predictive Models",
      "Customer Segmentation",
      "Executive Dashboards",
    ],
    slug: "data-analytics",
  },
  {
    number: "08",
    title: "E-Commerce Solutions",
    description:
      "Conversion-optimized online stores with secure checkout, smart inventory, and powerful administration. Built to sell.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    deliverables: [
      "Custom Storefronts",
      "Payment Gateways",
      "Inventory Management",
      "Order Tracking",
      "Multi-Currency Support",
      "Analytics Integration",
    ],
    slug: "e-commerce-solutions",
  },
  {
    number: "09",
    title: "Blockchain & Web3",
    description:
      "Secure, audited smart contracts and decentralized applications. Future-proof technology with security-first engineering.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    deliverables: [
      "Smart Contracts",
      "DeFi Protocols",
      "NFT Platforms",
      "Security Audits",
      "Token Creation",
      "DApp Development",
    ],
    slug: "blockchain-web3",
  },
  {
    number: "10",
    title: "Cyber Security",
    description:
      "Comprehensive security assessments and 24/7 monitoring. Protect your data, meet compliance, prevent breaches.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    deliverables: [
      "Penetration Testing",
      "Security Audits",
      "Encryption Implementation",
      "Vulnerability Assessment",
      "Compliance Audits",
      "Incident Response",
    ],
    slug: "cyber-security",
  },
  {
    number: "11",
    title: "QA & Testing",
    description:
      "Comprehensive quality assurance — manual, automated, performance, and security testing. Ship with confidence.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    deliverables: [
      "Manual Testing",
      "Test Automation",
      "Performance Testing",
      "Security Testing",
      "Mobile & API Testing",
      "Continuous Testing",
    ],
    slug: "qa-testing",
  },
  {
    number: "12",
    title: "Custom Software",
    description:
      "Bespoke software engineered for your exact requirements. From concept to production — built to scale.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    deliverables: [
      "Requirements Analysis",
      "System Architecture",
      "Custom Development",
      "Third-party Integrations",
      "Legacy Modernization",
      "Ongoing Maintenance",
    ],
    slug: "custom-software",
  },
];

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HEADER
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12">
            <Link
              href="/"
              className="hover:text-[#0a2540] transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0a2540] font-medium">Services</span>
          </div>

          {/* Title */}
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a2540] leading-[1.05] mb-8 tracking-tight">
              Services
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              We design, build, and scale software that powers modern
              businesses. Every project is delivered with engineering
              discipline and product thinking.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: SERVICES LIST
      ═══════════════════════════════════════════════════════════ */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="border-b border-slate-200 last:border-0"
            >
              <Link href={`/services/${service.slug}`} className="block group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 items-center">

                  {/* Left: Image (Grayscale → Color on Hover) */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-8">

                    {/* Number + Title */}
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-sm font-mono text-slate-400">
                        {service.number}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
                      {service.description}
                    </p>

                    {/* Deliverables (2-column grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0a2540] group-hover:text-blue-600 transition-colors">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: BOTTOM CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a2540]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let's build something
              <br />
              that lasts.
            </h2>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-2xl">
              Tell us about your project. We'll respond within 24 hours with a
              plan, timeline, and honest pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a2540] rounded-md font-semibold hover:bg-blue-50 transition-colors"
              >
                Start a Project
                <span>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
