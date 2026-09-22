"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Code2,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
 { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Cloud & DevOps", href: "/services/cloud-devops" },
  { name: "Data Engineering", href: "/services/data-engineering" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "E-Commerce Solutions", href: "/services/e-commerce-solutions" },
  { name: "Blockchain Development", href: "/services/blockchain-web3" },
  { name: "Cyber Security", href: "/services/cyber-security" },
  { name: "QA & Testing", href: "/services/qa-testing" },
  { name: "Custom Software", href: "/services/custom-software" },
];

// Real SVG Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1e3a5f] text-white overflow-hidden">

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* COLUMN 1: LOGO + SOCIAL */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold text-white">
                  HTR <span className="text-blue-300">Systems</span>
                </span>
                <span className="text-[11px] text-blue-200/80 tracking-[0.2em] mt-1 font-medium">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-blue-100/70 text-sm leading-relaxed mb-6 max-w-xs">
              Building innovative software solutions that help businesses grow in the digital age.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 border border-white/15 hover:border-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-400 rounded-full" />
            </h3>
            <ul className="space-y-3.5 mt-8">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-blue-100/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-blue-400 group-hover:w-4 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-400 rounded-full" />
            </h3>
            <ul className="space-y-3.5 mt-8">
              {serviceLinks.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-blue-100/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-blue-400 group-hover:w-4 transition-all duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-400 rounded-full" />
            </h3>

            <ul className="space-y-5 mt-8">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                  <MapPin size={17} className="text-blue-200 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-300/80 font-semibold mb-1">
                    Location
                  </div>
                  <div className="text-sm text-blue-100/80 leading-relaxed">
                    I-9 Industrial Area,
                    <br />
                    Islamabad, Pakistan
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                  <Phone size={17} className="text-blue-200 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-300/80 font-semibold mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+923090649180"
                    className="text-sm text-blue-100/80 hover:text-white transition-colors"
                  >
                    +92 309 0649180
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                  <Mail size={17} className="text-blue-200 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-300/80 font-semibold mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:info@htrsystems.com"
                    className="text-sm text-blue-100/80 hover:text-white transition-colors"
                  >
                    info@htrsystems.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100/60 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">HTR Systems</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#privacy"
              className="text-blue-100/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="#terms"
              className="text-blue-100/60 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 rounded-lg bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/40 transition-all hover:scale-110 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
}