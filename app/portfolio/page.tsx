"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  Sparkles,
  Code2,
  Smartphone,
  Brain,
  Palette,
  ShoppingCart,
  Layers,
} from "lucide-react";
import { projects } from "@/lib/projects";

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "Web Development", label: "Web", icon: Code2 },
  { id: "Mobile Apps", label: "Mobile", icon: Smartphone },
  { id: "AI & ML", label: "AI & ML", icon: Brain },
  { id: "UI/UX Design", label: "Design", icon: Palette },
  { id: "E-Commerce", label: "E-Commerce", icon: ShoppingCart },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <main className="bg-white min-h-screen">

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">
              Our Work
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-5">
            Our Portfolio
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Explore our latest projects — from web apps to AI-powered platforms.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-slate-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-md mx-auto mb-8 relative">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full px-5 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    isActive
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-slate-600 mb-8">
            Showing{" "}
            <span className="font-bold text-[#1e3a5f]">
              {filteredProjects.length}
            </span>{" "}
            projects
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Real Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#1e3a5f]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-sm bg-blue-500 px-4 py-2 rounded-full">
                      View Project →
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    {project.status}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur text-[#1e3a5f] text-xs font-bold rounded-full uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold">
                    Read More
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                No projects found
              </h3>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's turn your idea into a powerful digital product.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
