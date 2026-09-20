"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HEADER
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12">
            <Link href="/" className="hover:text-[#0a2540] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href="/services"
              className="hover:text-[#0a2540] transition-colors"
            >
              Services
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0a2540] font-medium">{service.title}</span>
          </div>

          {/* Category label */}
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            {service.category}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a2540] leading-[1.05] mb-8 tracking-tight max-w-4xl">
            {service.title}
          </h1>

          {/* Long description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            {service.longDescription || service.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-slate-200 mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Timeline
              </div>
              <div className="text-base font-semibold text-[#0a2540]">
                {service.duration}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Investment
              </div>
              <div className="text-base font-semibold text-[#0a2540]">
                {service.pricing}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Category
              </div>
              <div className="text-base font-semibold text-[#0a2540]">
                {service.category}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-slate-100">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 sticky top-24">
                Overview
              </div>
            </div>

            <div className="lg:col-span-9">
              <p className="text-2xl md:text-3xl font-medium text-[#0a2540] leading-snug mb-12">
                {service.longDescription || service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4">
                    What we deliver
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 sticky top-24">
                Process
              </div>
            </div>

            <div className="lg:col-span-9 space-y-12">
              {service.process.map((step, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div className="md:col-span-1">
                    <div className="text-sm font-mono text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">
                      {step.step}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: BENEFITS
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 sticky top-24">
                Benefits
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-4 border-b border-slate-100 last:border-0"
                  >
                    <div className="text-sm font-mono text-slate-400 shrink-0 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-slate-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: RELATED SERVICES
      ═══════════════════════════════════════════════════════════ */}
      {relatedServices.length > 0 && (
        <section className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">

            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-12">
              Related Services
            </div>

            <div className="space-y-8">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.id}
                  href={`/services/${rs.slug}`}
                  className="block group"
                >
                  <div className="flex items-center justify-between py-6 border-b border-slate-100 last:border-0">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] group-hover:text-blue-600 transition-colors mb-2">
                        {rs.title}
                      </h3>
                      <p className="text-slate-600 text-sm max-w-2xl">
                        {rs.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0a2540] group-hover:text-blue-600 transition-colors shrink-0 ml-6">
                      <span>View</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: CTA
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