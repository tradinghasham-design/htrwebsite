import Link from "next/link";
import { Home, ArrowRight, Search, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6 py-16">

      <div className="max-w-2xl w-full text-center">

        {/* Big 404 */}
        <div className="relative mb-8">
          <h1 className="text-[140px] md:text-[200px] font-black leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        </div>

        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center">
          <Compass size={40} className="text-blue-500" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <Home size={18} />
            Back to Home
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 rounded-lg font-semibold transition-all duration-300"
          >
            <Search size={18} />
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Sparkles size={16} className="text-blue-500" />
            <p className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider">
              Quick Links
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Careers", href: "/careers" },
              { label: "About Us", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group px-4 py-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-slate-400 mt-8">
          Error Code: 404 | Page Not Found
        </p>

      </div>
    </main>
  );
}